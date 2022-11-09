import { createContext, useState } from "react";

export const useCartDetails = createContext();

export default (props) => {
     
    const [cartProducts, setCartProducts] = useState([]); 

    const addCartProducts =(product) => {
        if(cartProducts.length ===0 ){
           return setCartProducts([...cartProducts, product]);
        }
        setCartProducts(
            cartProducts.map((items) => {
                if(items.id === product.id){
                    return {... items, amount: items.amount + product.amount}    
                }else{
                    return items;
                }
            })
        );
    }

    const deleteCartProducts = (id) => {
        setCartProducts(cartProducts.filter(items => items.id !== id))
    }

    const countTotalamountProduct= cartProducts.reduce((acc, current ) => current.amount + acc, 0)

    return (
        <useCartDetails.Provider value={{cartProducts, setCartProducts, addCartProducts, deleteCartProducts, countTotalamountProduct }}>
            {props.children}
        </useCartDetails.Provider>
    );
};
