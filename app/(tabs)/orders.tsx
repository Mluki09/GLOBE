// orders.tsx
// Component to display customer order history and tracking
import React from 'react';

const OrdersScreen: React.FC = () => {
    // Sample data to simulate customer orders
    const orders = [
        { id: 1, date: '2026-04-01', status: 'Delivered', trackingNumber: '123456' },
        { id: 2, date: '2026-03-15', status: 'In Transit', trackingNumber: '789012' },
    ];

    return (
        <div>
            <h1>Order History</h1>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        <p>Date: {order.date}</p>
                        <p>Status: {order.status}</p>
                        <p>Tracking Number: {order.trackingNumber}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrdersScreen;