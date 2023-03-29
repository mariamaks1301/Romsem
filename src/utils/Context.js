
import { createContext, useState } from "react";
export const CustomContext = createContext();

export const Context = (props)=>{

    const [basket, setBasket] = useState([]);

    const addBasket = (product) =>{
        setBasket(prev => [...prev, {
            ...product,
            count: 1
        }])
    }

    const delBasket = (id)=>{
        setBasket(prev => prev.filter((item)=> item.id !== id))
    }

    const plusOneBasket = (id) =>{
        setBasket(prev => prev.map((item)=> {
            if(item.id === id){
                return {...item, count: item.count + 1}
            }
            return item
        }))
    }

    const minusOneBasket = (id)=>{

        let count = basket.find((item)=> item.id === id).count;

        if(count === 1){
            setBasket(prev => prev.filter((item)=>item.id !== id))
        } else{
            setBasket(prev => prev.map(item=>{
                if(item.id === id){
                    return {...item, count: item.count -1}
                }
                return item
            }))
        }

    
    }


    const value = {
        basket,
        setBasket,
        addBasket, 
        plusOneBasket,
        minusOneBasket,
        delBasket
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}