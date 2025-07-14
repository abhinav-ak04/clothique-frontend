import { useState } from 'react';
import { addressList } from '../data/sample-addresses';

function useAddresses() {
  const [addresses, setAddresses] = useState(addressList);

  const defaultAddress = addresses.filter((address) => address.isDefault);
  const otherAddresses = addresses.filter((address) => !address.isDefault);

  return { defaultAddress, otherAddresses };
}

export default useAddresses;
