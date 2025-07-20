import axios from '../api/axios.js';
import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userId, setUserId] = useState(localStorage.getItem('loggedInUser'));
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`/user/get/${userId}`);
        setUserData(res.user);
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
