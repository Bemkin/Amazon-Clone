import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './src/Pages/Landing/Landing';
import SignIn from './src/Pages/Auth/Auth';  // Updated import
import Payment from './src/Pages/Payment/Payment';
import Orders from './src/Pages/Orders/Orders';
import Cart from './src/Pages/Cart/Cart';
import CategoryPage from './src/Pages/CategoryPage/CategoryPage'; 
import ProductDetail from './src/Pages/ProductDetail/ProductDetail';
import Layout from './src/Components/Layout/Layout';
import useScrollToTop from './src/Hooks/useScrollToTop';
import { CartProvider } from './src/Pages/Cart/CartContext';
import SignUp from './src/Pages/Auth/SignUp';
import Header from './src/Components/Header/Header';  // Import Header

function Routing() { 
    useScrollToTop();
    const [user, setUser] = useState(null);  // Manage user state

  return (
    <CartProvider>   
        <Header user={user} setUser={setUser} /> 
        <Layout>
          <Routes>
            <Route path="/Amazon-Clone/" element={<Landing />} />
            <Route path="/auth" element={<SignIn setUser={setUser} />} /> 
            <Route path='/signup' element={<SignUp setUser={setUser} />} /> 
            <Route path="/payments" element={<Payment />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} /> 
            <Route path="/product/:productId" element={<ProductDetail />} />
          </Routes>
        </Layout>
    </CartProvider>
  );
}

export default Routing;
