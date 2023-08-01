import React, { createContext, useState } from "react";

export const CarritoContext = createContext({
    cart: [],
    total: 0,
    totalQty: []
})

export const CarritoProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQty, setTotalQty] = useState(0);

    const addToCart = (product, qty) => {
        const exists = cart.find(item => item.product.id === product.id);

        if(!exists) {
            setCart(prev => [...prev, {product,qty}]);
            setTotalQty(prev => prev + qty)
            setTotal(prev => prev + (product.price * qty))
        }else{
            const updatedCart = cart.map(item => {
                if(item.product.id === product.id) {
                    return {...item, qty: item.qty + qty}
                } else {
                    return item;
                }
            } );
            setCart(updatedCart);
            setTotalQty(prev => prev + qty);
            setTotal(prev => prev + (product.price * qty));
        }
    }

    const deleteItem = (id) =>{
        const deletedItem = cart.find(item => item.product.id === id);
        const updatedCart = cart.filter(item => item.product.id !== id);

        setCart(updatedCart);
        setTotalQty(prev => prev - deletedItem.qty);
        setTotal(prev => prev - (deletedItem.product.price * deletedItem.qty));
    }

    const removeList = () => {
        setCart([]);
        setTotal(0);
        setTotalQty(0)
    }

    return(
        <CarritoContext.Provider value={{cart,total,totalQty,addToCart,deleteItem,removeList}}>
            {children}
        </CarritoContext.Provider>
    )
}




