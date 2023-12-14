import { createContext, useState, useContext } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { getBasket, getBasketService } from "../graphql/queries";
import { useAuthCXT } from "./AuthCXT";

const BasketCXT = createContext({});

const BasketProvider = ({ children }) => {
    const { sub } = useAuthCXT();
    const [basket, setBasket] = useState([]);
    const [laundromat, setLaundromat] = useState(null);

    const  addService = (service, quantity) => {
        //Get the basket or create one
    };

    return(
        <BasketCXT.Provider value={{ addService, setLaundromat}}>
            {children}
        </BasketCXT.Provider>
    )
}

export default BasketProvider;

export const useBasketCXT = () => useContext(BasketCXT);