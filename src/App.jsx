import './App.css'
import { Routes, Route } from 'react-router-dom'
import { HomePage, CartPage } from './pages'
import { Navbar, Footer } from './components'
import ShopContextProvider from './context/ShopContextProvider'

function App() {

  return (
    <div className="">
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
        {/* <Footer /> */}
      </ShopContextProvider>
    </div>
  )
}

export default App
