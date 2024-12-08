import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useCart } from '../../Pages/Cart/CartContext';
import CheckoutForm from './CheckOutForm';
import './Payment.css';
import config from '../../API/Config';

// Load Stripe
const stripePromise = loadStripe('pk_test_51QSfl2EpYK2646EX0SyIDs9qZdAE8ERYYqQGolOZQQjkdERzfWUCdmYsnPh7Ay7SMXPnWM9eejgmUBsjuvEq5QSK00qRiOS2en');

const Payment = () => {
  const { cartItems = [] } = useCart();
  const [clientSecret, setClientSecret] = useState('');
  const [address, setAddress] = useState({
    line1: '',
    line2: '',
    city: '',
    state: '',
    postal_code: '',
    country: ''
  });

  useEffect(() => {
    const totalAmount = Math.round(cartItems.reduce((total, item) => total + item.price * item.quantity, 0) * 100);

    if (totalAmount < 50) {
      console.error("Total amount must be greater than 50 cents");
      return;
    }

    // Use the deployed server URL from the configuration file
    fetch(`${config.serverUrl}/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cartItems.map(item => ({
        price: item.price,
        quantity: item.quantity || 1,
      })) }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          console.error(data.error);
        } else {
          setClientSecret(data.clientSecret);
        }
      });
  }, [cartItems]);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress(prevAddress => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>{item.price} USD</p>
            </div>
          </div>
        ))}
      </div>
      <div className="address-form">
        <h2>Delivery Address</h2>
        <input
          type="text"
          name="line1"
          placeholder="Address Line 1"
          value={address.line1}
          onChange={handleAddressChange}
        />
        <input
          type="text"
          name="line2"
          placeholder="Address Line 2"
          value={address.line2}
          onChange={handleAddressChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={address.city}
          onChange={handleAddressChange}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={address.state}
          onChange={handleAddressChange}
        />
        <input
          type="text"
          name="postal_code"
          placeholder="Postal Code"
          value={address.postal_code}
          onChange={handleAddressChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={address.country}
          onChange={handleAddressChange}
        />
      </div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} address={address} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
