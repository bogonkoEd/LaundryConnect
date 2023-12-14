import { createContext, useState, useEffect, useContext } from "react";
import { API, Auth, DataStore, graphqlOperation } from "aws-amplify";
import { getUser } from "../graphql/queries";

const AuthCXT = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const sub = user?.attributes?.sub;

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true })
    .then(setUser)
    .catch((error) => console.error("Error fetching auth user", error))
    .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (!sub) {
      setDbUser(null);
      return;
    }

    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const userData = await API.graphql(graphqlOperation(getUser, { id: sub }));
        if (userData.data.getUser) {
          setDbUser(userData.data.getUser);
        }
      } catch (e) {
        console.error("Error fetching user", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [sub]);

  return (
    <AuthCXT.Provider value={{ user, dbUser, sub, setDbUser, isLoading }}>
        {children}
        </AuthCXT.Provider>
  );
};

export default AuthProvider;

export const useAuthCXT = () => useContext(AuthCXT);
