import React, { createContext, useState } from 'react'
import { products } from '../constants';

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems(prev => ({...prev, [itemId]: newAmount}))
  }

  const getTotalCartItems = () => {
    let totalItems = 0 
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item]
      }
    }
    return totalItems;
  }

  const getSubTotalCartAmount = () => {
    let subTotalAmount = 0 
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find(product => ( product.id === Number(item)
        ))
        subTotalAmount += cartItems[item] * itemInfo.price
      }
    }
    return subTotalAmount;
  }

  const getShipmentFee = () => {
    let shipmentFee = (15 * getSubTotalCartAmount()) / 100
    return shipmentFee
  }

  const getTotalCartAmount = () => {
    let totalFee = getSubTotalCartAmount() + getShipmentFee()
    return totalFee
  }

  const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartItems, getSubTotalCartAmount, getShipmentFee, getTotalCartAmount}

  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider