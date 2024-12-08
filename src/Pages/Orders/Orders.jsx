import React, { useEffect, useState } from 'react';
import { getFirestore, collection, query, where, onSnapshot } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const q = query(collection(db, 'orders'), where('userId', '==', user.uid));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const ordersArray = [];
        querySnapshot.forEach((doc) => {
          ordersArray.push(doc.data());
        });
        setOrders(ordersArray);
      });
      return () => unsubscribe();
    }
  }, [user, db]);

  if (orders.length === 0) {
    return <p className='no-order'>No orders found.</p>;
  }

  return (
    <div className="orders-container">
      <h1>Your Orders</h1>
      {orders.map((order, index) => (
        <div key={index} className="order">
          <div className="order-summary">
            <p><strong>Payment Intent ID:</strong> {order.paymentIntent.id}</p>
            <p><strong>Amount:</strong> ${order.paymentIntent.amount / 100}</p>
            <p><strong>Status:</strong> {order.paymentIntent.status}</p>
          </div>
          <div className="order-items">
            <h2>Items Purchased:</h2>
            {order.items.map((item, itemIndex) => (
              <div key={itemIndex} className="order-item">
                <img src={item.image} alt={item.name} />
                <p><strong>Item:</strong> {item.name}</p>
                <p><strong>Address:</strong> {item.address.line1}, {item.address.city}, {item.address.state}, {item.address.postal_code}, {item.address.country}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
