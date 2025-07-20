import axios from '../api/axios.js';
import { createContext, useContext, useEffect, useState } from 'react';
import { getUserData } from '../api/user.js';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userId, setUserId] = useState(localStorage.getItem('loggedInUser'));
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!userId || !token) return;

    const fetchUserData = async () => {
      try {
        const { user } = await getUserData(userId);
        setUserData(user);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    if (userId) fetchUserData();
  }, [userId]);

  return (
    <UserContext.Provider value={{ userId, setUserId, userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
