import { createContext, useState } from "react";


export const CustomContext = createContext();

export const Context = (props) =>{

    const [products, setProducts] = useState([]);
    const [basket, setBasket] = useState([]);
    const [user, setUser] = useState({
        email: ''
   })

    const value = {
        user,
        setUser,
        products,
        setProducts,
        basket,
        setBasket


    }
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}