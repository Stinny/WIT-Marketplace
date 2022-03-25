import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateProduct from './pages/CreateProduct';
import Cart from './pages/Cart';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  //function gets passes to the components that need to toggle isOpen
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header toggle={toggle} />
      {/* <SideBar isOpen={isOpen} toggle={toggle} /> */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/item/:itemId' element={<ProductDetail />} />
        <Route exact path='/addproduct' element={<CreateProduct />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
