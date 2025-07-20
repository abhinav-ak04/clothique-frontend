import { createContext, useContext, useEffect, useState } from 'react';
import { useUser } from './UserContext';
import { getUserAddresses } from '../api/address';

const AddressContext = createContext();

export function AddressProvider({ children }) {
  const { userId } = useUser();
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);

  const defaultAddress = addresses.filter((address) => address.isDefault);
  const otherAddresses = addresses.filter((address) => !address.isDefault);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!userId || !token) return;

    const fetchAddresses = async () => {
      setLoading(true);

      try {
        const { addresses } = await getUserAddresses(userId);
        setAddresses(addresses);
      } catch (error) {
        console.error('Error fetching addresses', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, [userId]);

  return (
    <AddressContext.Provider
      value={{
        addresses,
        defaultAddress,
        otherAddresses,
        setAddresses,
        loading,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export function useAddresses() {
  return useContext(AddressContext);
}
