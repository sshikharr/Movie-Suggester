import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Movie from './pages/Movie'
import { RecoilRoot } from 'recoil'
import WishList from './pages/Wishlist'
function App() {
  
  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/movie' element={<Movie/>}/>
          <Route path='/wishlist' element={<WishList/>}/>
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App
