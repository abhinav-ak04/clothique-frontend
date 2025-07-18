import { createContext, useContext, useEffect, useState } from 'react';
import { getAllOrders } from '../api/order';
import { useUser } from './UserContext';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const { userId } = useUser();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const { orders } = await getAllOrders(userId);
        setOrders(orders);
      } catch (error) {
        console.error('Error fetching orders', error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchOrders();
  }, [userId]);

  return (
    <OrderContext.Provider value={{ orders, setOrders, loading }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  return useContext(OrderContext);
}
