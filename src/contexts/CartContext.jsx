import { createContext, useContext, useEffect, useState } from 'react';
import { getCartItems } from '../api/cart';
import { transformCartItems } from '../utils/transform-cart';
import { useUser } from './UserContext';

const CartContext = createContext();

export function CartProvider({ children }) {
  const { userId } = useUser();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!userId || !token) return;

    const fetchCartData = async () => {
      setLoading(true);
      try {
        const items = await getCartItems(userId);
        setCart(transformCartItems(items));
      } catch (error) {
        console.error('Error occured while fetching cart', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, [userId]);

  return (
    <CartContext.Provider value={{ cart, setCart, loading }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
