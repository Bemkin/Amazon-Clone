import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './src/Pages/Landing/Landing';
import SignIn from './src/Pages/Auth/SignUp';
import Payment from './src/Pages/Payment/Payment';
import Orders from './src/Pages/Orders/Orders';
import Cart from './src/Pages/Cart/Cart';
import CategoryPage from './src/Pages/CategoryPage/CategoryPage'; 
import ProductDetail from './src/Pages/ProductDetail/ProductDetail';
import Layout from './src/Components/Layout/Layout';
import useScrollToTop from './src/Hooks/useScrollToTop';
import { CartProvider } from './src/Pages/Cart/CartContext';


function Routing() { 
    useScrollToTop();

  return (
    <CartProvider>
   <Layout>
      <Routes>
        <Route path="/Amazon-Clone/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
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
