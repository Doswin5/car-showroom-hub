import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContextProvider'

const Product = (props) => {
  const { id, productName, productImage, price  } = props.data

  const { addToCart, cartItems } = useContext(ShopContext)
  
  const cartItemAmount = cartItems[id]
  return (
    <div className='flex flex-col items-center'>
      <img src={productImage} alt="" className='h-[150px]' />
      <h3 className="font-medium text-[20px]">{productName}</h3>
      <h4 className="font-bold text-[24px]">${price}</h4>
      <button className="bg-white border-2 border-black rounded-full text-black px-[24px] hover:bg-black hover:text-white mt-[16px] py-[8px] text-[16px] flex gap-2" onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount > 0 && <span className='font-bold'>({cartItemAmount})</span>}
      </button>

    </div>
  )
}

export default Product