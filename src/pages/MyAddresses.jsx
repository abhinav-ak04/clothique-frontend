import { useEffect, useState } from 'react';
import { useAddresses } from '../contexts/AddressContext.jsx';
import AddressForm from '../ui/checkout-address/AddressForm.jsx';
import NoAddressFallback from '../ui/my-addresses/NoAddressFallback';
import SelectProfileAddress from '../ui/my-addresses/SelectProfileAddress';
import Modal from '../ui/shared/Modal.jsx';
import ModalAddressForm from '../ui/shared/ModalAddressForm.jsx';

function MyAddresses() {
  const { defaultAddress, otherAddresses } = useAddresses();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchAddresses = () => {
      setSelectedAddress(defaultAddress[0]?._id);
    };
    fetchAddresses();
  }, [defaultAddress]);

  const isAddressesPresent = !!selectedAddress;

  return (
    <div className="m-4 w-[730px]">
      {isAddressesPresent ? (
        <>
          <div className="mb-3 flex items-center justify-between">
            <h1 className="text-[19px] font-bold text-zinc-900">
              Saved Addresses
            </h1>
            <button
              className="cursor-pointer rounded-sm border-1 border-zinc-300 px-4 py-2 text-sm font-bold text-indigo-500"
              onClick={() => setIsModalOpen(true)}
            >
              + ADD NEW ADDRESS
            </button>
          </div>
          <SelectProfileAddress
            heading="DEFAULT ADDRESS"
            addressList={defaultAddress}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
          />
          {otherAddresses.length > 0 && (
            <SelectProfileAddress
              heading="OTHER ADDRESSES"
              addressList={otherAddresses}
              selectedAddress={selectedAddress}
              setSelectedAddress={setSelectedAddress}
            />
          )}
          {/* {isModalOpen && (
            <Modal setIsModalOpen={setIsModalOpen}>
              <ModalAddressForm />
            </Modal>
          )} */}
        </>
      ) : (
        <NoAddressFallback />
      )}
    </div>
  );
}

export default MyAddresses;
