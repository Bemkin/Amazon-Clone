import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Landing from './src/Pages/Landing/Landing';
import SignIn from './src/Pages/Auth/Auth';
import Payment from './src/Pages/Payment/Payment';
import Orders from './src/Pages/Orders/Orders';
import Cart from './src/Pages/Cart/Cart';
import CategoryPage from './src/Pages/CategoryPage/CategoryPage'; 
import ProductDetail from './src/Pages/ProductDetail/ProductDetail';
import Layout from './src/Components/Layout/Layout';
import useScrollToTop from './src/Hooks/useScrollToTop';
import { CartProvider } from './src/Pages/Cart/CartContext';
import SignUp from './src/Pages/Auth/SignUp';
import Header from './src/Components/Header/Header';
import { auth } from './src/Utils/FirebaseConfig'; 
import ProtectedRoute from './src/Pages/Payment/Protected Route/ProtectedRoute';

function Routing() { 
  useScrollToTop();
  const [user, setUser] = useState(null);  // Manage user state

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <CartProvider>
        <Header user={user} setUser={setUser} /> 
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<SignIn setUser={setUser} />} />  
            <Route path='/signup' element={<SignUp setUser={setUser} />} /> 
            <Route path="/payment" element={
              <ProtectedRoute>
              <Payment />
              </ProtectedRoute>
              } />
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
