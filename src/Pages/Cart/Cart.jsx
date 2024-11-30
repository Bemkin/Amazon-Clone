import React from 'react';
import { useCart } from '../../Pages/Cart/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, addToCart, decreaseQuantity, removeFromCart, clearCart } = useCart();

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h1>Your Cart</h1>
        <p>Your cart is empty. Go back to <Link to="/">shop more</Link>.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-summary">
        <p>Subtotal ({cart.length} distinct items): <strong>${calculateSubtotal()}</strong></p>
        <p>Total Quantity: <strong>{calculateTotalQuantity()}</strong></p>
        <label>
          <input type="checkbox" /> This order contains a gift
        </label>
        <button className="checkout-button">Continue to Checkout</button>
      </div>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="cart-item-details">
              <h2>{item.title}</h2>
              <p>Price: ${item.price}</p>
              <div className="item-quantity">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={clearCart} className="clear-cart-button">Clear Cart</button>
    </div>
  );
};

export default Cart;
