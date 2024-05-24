import React, { useState, useEffect } from 'react';
import './Home.css';

const ordersData = [
  {
    id: 1,
    orderNumber: '12345',
    orderDate: '2024-05-01',
    pickUpDate: '2024-05-02',
    deliveryDate: '2024-05-05',
    status: 'Scheduled for Pick Up',
    items: [
      { item: 'Shirt', price: '$5' },
      { item: 'Pants', price: '$7' },
    ],
  },
  {
    id: 2,
    orderNumber: '12346',
    orderDate: '2024-05-03',
    pickUpDate: '2024-05-04',
    deliveryDate: '2024-05-07',
    status: 'Scheduled for Delivery',
    items: [
      { item: 'Jacket', price: '$10' },
      { item: 'Sweater', price: '$8' },
    ],
  },
];

const Home = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    // Simulating data fetch
    setOrders(ordersData);
  }, []);

  const handleItemClick = (order) => {
    setSelectedOrder(order);
  };

  const handleClosePopup = () => {
    setSelectedOrder(null);
  };

  const renderOrders = (status) => {
    const filteredOrders = orders.filter(order => order.status === status);
    if (filteredOrders.length === 0) {
      return <p>No current orders</p>;
    }
    return filteredOrders.map(order => (
      <div key={order.id} className="order">
        <p>Order Number: {order.orderNumber}</p>
        <p>Order Date: {order.orderDate}</p>
        {status === 'Scheduled for Pick Up' ? (
          <p>Pick Up Date: {order.pickUpDate}</p>
        ) : (
          <>
            <p>Delivery Date: {order.deliveryDate}</p>
            <button onClick={() => handleItemClick(order)}>View Items</button>
          </>
        )}
      </div>
    ));
  };

  return (
    <div className="home">
      <h2>Home Component</h2>
      <div className="orders-section">
        <h3>Scheduled for Pick Up</h3>
        {renderOrders('Scheduled for Pick Up')}
      </div>
      <div className="orders-section">
        <h3>Scheduled for Delivery</h3>
        {renderOrders('Scheduled for Delivery')}
      </div>
      {selectedOrder && (
        <div className="popup">
          <div className="popup-content">
            <h4>Order Number: {selectedOrder.orderNumber}</h4>
            <ul>
              {selectedOrder.items.map((item, index) => (
                <li key={index}>{item.item} - {item.price}</li>
              ))}
            </ul>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
