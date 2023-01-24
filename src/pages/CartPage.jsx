import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { products } from '../constants'
import CartItem from '../components/CartItem'
import { ShopContext } from '../context/ShopContextProvider'

const CartPage = () => {
  const navigate = useNavigate()
  const { cartItems, getSubTotalCartAmount, getTotalCartItems, getShipmentFee, getTotalCartAmount } = useContext(ShopContext)
  return (
    <div className='py-[100px] sm:px-[40px] px-[16px]'>
      <h1 className="font-bold text-[40px] sm:text-[64px] text-center">
        My Cart Items
      </h1>
      <div className='sm:my-[40px] my-[24px] flex flex-col items-center gap-[16px] sm:gap-[24px]'>
        {
          products.map(product => (
            cartItems[product.id] !== 0 &&
            <CartItem key={product.id} data={product} />
          ))
        }
      </div>
      {getTotalCartItems() > 0 ?
      <div>
        <div className='flex flex-col items-center'>
          <div className="flex justify-between items-center mt-[40px] sm:w-[60%] w-[100%]">
            <h3 className="font-medium text-[20px]">
              Subtotal:
            </h3>
            <h4 className="font-bold text-[24px]">
              ${getSubTotalCartAmount()}
            </h4>
          </div>
          <div className="flex justify-between items-center my-[16px] sm:w-[60%] w-[100%]">
            <h3 className="font-medium text-[20px]">
              Shipment Fee (15%):
            </h3>
            <h4 className="font-bold text-[24px]">
              ${getShipmentFee()}
            </h4>
          </div>
          <div className="flex justify-between items-center pt-[16px] border-t sm:w-[60%] w-[100%]">
            <h3 className="font-medium text-[20px]">
              Total:
            </h3>
            <h4 className="font-bold text-[24px]">
              ${getTotalCartAmount()}
            </h4>
          </div>
          <div className='flex sm:flex-row flex-col sm:w-[60%] w-full justify-center sm:gap-[40px] gap-[24px] my-[40px]'>
            <button className='bg-black text-white rounded-[8px] py-[16px] w-full font-medium text-[18px]' onClick={() => navigate('/')}>
              Continue Shopping
            </button>
            <button className='bg-white text-black border-2 border-black rounded-[8px] py-[16px] w-full font-medium text-[18px] hover:bg-black hover:text-white'>
              Checkout
            </button>
          </div>
        </div>
      </div>  : <h4 className="font-bold text-[24px] text-center">
        There is no Item in your cart. <span className='underline text-red-600 cursor-pointer' onClick={() => navigate('/')}> Add Items</span>
      </h4> }
    </div>
  )
}

export default CartPage