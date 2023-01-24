import React from 'react'
import { products } from '../constants'
import { Product } from '../components'

const HomePage = () => {
  return (
    <div className='pt-[100px] pb-[40px] px-[40px]'>
      <h1 className="font-bold text-[40px] sm:text-[64px] text-center">Car ShowRoom</h1>
      <div className='my-[40px]'>
        <h2 className="font-bold text-[32px] mb-[40px] sm:text-left text-center">All Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 place-items-center gap-x-[40px] gap-y-[60px]">
          {
            products.map(product => (
              <Product key={product.id} data={product} />
            ))
          }
        </div>

      </div>
      <div className='my-[80px]'>
        <h2 className="font-bold text-[32px] mb-[40px] sm:text-left text-center">Recommended Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 place-items-center gap-[40px]">
          {
            products.map(product => (
              product.section === 'Recommended' && <Product key={product.id} data={product} />
            ))
          }
        </div>
      </div>
      <div className='my-[80px]'>
        <h2 className="font-bold text-[32px] mb-[40px] sm:text-left text-center">Top Buyers Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 place-items-center gap-[40px]">
          {
            products.map(product => (
              product.section === 'Top Buyers' && <Product key={product.id} data={product} />
            ))
          }
        </div>
      </div>
      <div className='my-[80px]'>
        <h2 className="font-bold text-[32px] mb-[40px] sm:text-left text-center">Top Sellers Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 place-items-center gap-[40px]">
          {
            products.map(product => (
              product.section === 'Top Sellers' && <Product key={product.id} data={product} />
            ))
          }
        </div>
      </div>
      <div className='my-[80px]'>
        <h2 className="font-bold text-[32px] mb-[40px] sm:text-left text-center">Top Gainers Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 place-items-center gap-[40px]">
          {
            products.map(product => (
              product.section === 'Top Gainers' && <Product key={product.id} data={product} />
            ))
          }
        </div>
      </div>
      <div className='my-[80px]'>
        <h2 className="font-bold text-[32px] mb-[40px] sm:text-left text-center">Top Losers Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 place-items-center gap-[40px]">
          {
            products.map(product => (
              product.section === 'Top Losers' && <Product key={product.id} data={product} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage