import { Auth } from "aws-amplify";
import { createContext, useEffect, useState, useContext} from "react";
import { DataStore } from "aws-amplify";
import { User } from "../models";

const AuthCXT = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [dbUser, setDbUser] = useState(null);
    const sub = user?.attributes?.sub;

    useEffect(() => {
        Auth.currentAuthenticatedUser().then(setUser)
    }, []);

    useEffect(() => {
        if(!sub) {
            setDbUser(null);
            return;
        }
        const fetchUser = async () => {
            const userData = await DataStore.query(User, (u) => u.sub("eq", sub));
            if(userData.length === 0) {
                setDbUser(null);
                return;
            }
            setDbUser(userData[0]);
        };
        fetchUser();
    }, [sub]);

  return (
    <AuthCXT.Provider value={{user, dbUser, sub}}>
      {children}
    </AuthCXT.Provider>
  );
};

export default AuthContextProvider;

export const useAuthCXT = () => useContext(AuthCXT);

