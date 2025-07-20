import { createContext, useContext, useEffect, useState } from 'react';
import { useUser } from './UserContext';
import { getWishlistItems } from '../api/wishlist';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const { userId } = useUser();
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);

  // console.log(wishlist);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!userId || !token) return;

    setLoading(true);

    const fetchWishlistData = async () => {
      try {
        const items = await getWishlistItems(userId);
        setWishlist(items);
      } catch (error) {
        console.error('Error fetching wishlist', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlistData();
  }, [userId]);

  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist, loading }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
