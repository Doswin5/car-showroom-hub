import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cart } from '../assets'
import { ShopContext } from '../context/ShopContextProvider'

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext)
  return (
    <div className='flex w-full justify-between items-center py-[24px] px-[16px] sm:px-[40px] fixed left-0 right-0 bg-white'>
      <Link to='/' className='text-[28px] font-bold font-mono' >ShowroomHUB</Link>
      <div className="relative">
        <Link to='/cart'>
          <img src={cart} alt="" className='w-[24px] h-[24px]' />
        </Link>
        {getTotalCartItems() > 0 && <div className="bg-red-700 text-white w-[20px] flex justify-center items-center h-[20px] text-[10px] rounded-[50%] absolute -right-[8px] -top-[8px]">{getTotalCartItems()}</div>}
      </div>
    </div>
  )
}

export default Navbar