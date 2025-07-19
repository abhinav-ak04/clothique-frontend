import { useEffect } from 'react';
import { useAddresses } from '../../contexts/AddressContext';
import AlterButton from '../shared/buttons/AlterButton';
import AddressForm from './AddressForm';
import SelectCheckoutAddress from './SelectCheckoutAddress';

function AddressSelector({ selectedAddress, setSelectedAddress }) {
  const { defaultAddress, otherAddresses } = useAddresses();

  useEffect(() => {
    const fetchAddresses = () => {
      setSelectedAddress(defaultAddress[0]?._id);
    };
    fetchAddresses();
  }, [defaultAddress, setSelectedAddress]);

  const isAddressesPresent = !!selectedAddress;

  return (
    <div
      className={`w-[67%] ${isAddressesPresent && 'border-r-1 border-zinc-200'} pt-5 pr-8`}
    >
      {isAddressesPresent ? (
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h1 className="pointer-events-none text-[19px] font-bold text-zinc-700">
              Select Delivery Address
            </h1>
            <AlterButton>ADD NEW ADDRESS</AlterButton>
          </div>
          <SelectCheckoutAddress
            heading="DEFAULT ADDRESS"
            addressList={defaultAddress}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
          />
          {otherAddresses.length > 0 && (
            <SelectCheckoutAddress
              heading="OTHER ADDRESSES"
              addressList={otherAddresses}
              selectedAddress={selectedAddress}
              setSelectedAddress={setSelectedAddress}
            />
          )}
        </div>
      ) : (
        <AddressForm />
      )}
    </div>
  );
}

export default AddressSelector;
