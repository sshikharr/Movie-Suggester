import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Movie from './pages/Movie'
import { RecoilRoot } from 'recoil'
import WishList from './pages/Wishlist'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
function App() {
  
  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/movie' element={<Movie/>}/>
          <Route path='/wishlist' element={<WishList/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Redirect from="/" to="/signin" />
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App
