import { createContext, useContext, useEffect, useState } from 'react';
import { getUserData } from '../api/user.js';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userId, setUserId] = useState(localStorage.getItem('loggedInUser'));
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!userId || !token || userData) return;

    const fetchUserData = async () => {
      setLoading(true);
      try {
        const { user } = await getUserData(userId);
        setUserData(user);
      } catch (error) {
        console.error('Error fetching user data', error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchUserData();
  }, [userId]);

  return (
    <UserContext.Provider
      value={{ userId, setUserId, userData, setUserData, loading }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
