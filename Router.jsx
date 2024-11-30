import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './src/Pages/Landing/Landing';
import SignIn from './src/Pages/Auth/SignUp';
import Payment from './src/Pages/Payment/Payment';
import Orders from './src/Pages/Orders/Orders';
import Cart from './src/Pages/Cart/Cart';

function Routing() {
  return ( 
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
  );
}

export default Routing;
