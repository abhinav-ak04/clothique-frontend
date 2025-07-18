import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AddressSelector from '../ui/checkout-address/AddressSelector';
import DeliveryEstimate from '../ui/checkout-address/DeliveryEstimate';
import PriceSummary from '../ui/shared/PriceSummary';

function CheckoutAddress() {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const location = useLocation();
  const { selectedItems, donation } = location.state || {
    selectedItems: [],
    donation: 0,
  };

  return (
    <div className="mx-30 flex px-2.5">
      <AddressSelector
        selectedAddress={selectedAddress}
        setSelectedAddress={setSelectedAddress}
      />
      <div className="ml-5 grow">
        <DeliveryEstimate selectedItems={selectedItems} />
        <PriceSummary
          selectedItems={selectedItems}
          donation={donation}
          navigatingMessage="CONTINUE"
          navigateTo="/checkout/payment"
          selectedAddress={selectedAddress}
        />
      </div>
    </div>
  );
}

export default CheckoutAddress;
