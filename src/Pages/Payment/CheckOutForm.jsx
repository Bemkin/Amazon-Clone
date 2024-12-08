import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import './CheckOutForm.css';
import { useCart } from '../../Pages/Cart/CartContext'; 

const CheckoutForm = ({ clientSecret, address }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const db = getFirestore();
  const auth = getAuth();
  const { cartItems, clearCart } = useCart(); // Get cart items and clearCart

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const billingDetails = {
      address: {
        line1: address.line1 || 'Default Line 1',
        line2: address.line2 || 'Default Line 2',
        city: address.city || 'Default City',
        state: address.state || 'Default State',
        postal_code: address.postal_code || '00000',
        country: address.country || 'US',
      },
      name: 'Customer Name',
    };

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: billingDetails,
        },
      });

      if (error) {
        console.error('[error]', error);
      } else if (paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded');
        alert('Payment succeeded!');

        // Save order details to Firestore
        const user = auth.currentUser;
        await addDoc(collection(db, 'orders'), {
          userId: user ? user.uid : null,
          paymentIntent,
          items: cartItems.map(item => ({
            name: item.title,
            image: item.image,
            address: billingDetails.address,
          })),
          createdAt: new Date(),
        });

        // Clear the cart
        clearCart();

        // Redirect to orders page
        navigate('/orders');
      }
    } catch (err) {
      console.error('Error processing payment:', err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
