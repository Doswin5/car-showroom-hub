import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContextProvider'

const CartItem = (props) => {
  const { id, productImage, productName, price } = props.data
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)
  return (
    <div className='border sm:p-[24px] p-[16px] rounded-[8px] flex justify-between items-center w-[100%] sm:w-[60%]'>
      <img src={productImage} alt="" className='sm:w-[40%] w-[60%]' />
      <div className='flex sm:flex-row flex-col-reverse items-end gap-4'>
        <div className="flex items-center sm:justify-center justify-end gap-2">
          <button className='text-[40px] cursor-pointer' onClick={() => removeFromCart(id)}>-</button>
          <input type="text" className='h-[40px] border outline-none w-[30%] font-bold text-center text-[24px]' value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
          <button className='text-[40px] cursor-pointer' onClick={() => addToCart(id)}>+</button>
        </div>
        <div>
          <h3 className="font-medium text-[20px] text-center">
            {productName}
          </h3>
          <h4 className="font-bold text-[24px] text-center">
            ${price}
          </h4>
        </div>
      </div>
    </div>
  )
}

export default CartItem