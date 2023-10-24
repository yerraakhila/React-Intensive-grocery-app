import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import ProductPage from "./Pages/ProductPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RegisterPage from "./Pages/RegisterPage";
import ErrorPage from "./Pages/ErrorPage";
import LoginPage from "./Pages/LoginPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products/:catId' element={<ProductPage/>}/>
        <Route path='/products/detail/:id' element={<ProductDetailPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
