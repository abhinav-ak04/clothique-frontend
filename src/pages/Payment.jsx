import { useLocation } from 'react-router-dom';
import PaymentMethods from '../ui/payments/PaymentMethods';
import PriceSummary from '../ui/shared/PriceSummary';

function Payment() {
  const location = useLocation();
  const { selectedItems, donation, selectedAddress } = location.state || {
    selectedItems: [],
    donation: 0,
    selectedAddress: '',
  };

  return (
    <div className="mx-30 flex px-2.5">
      <PaymentMethods
        selectedItems={selectedItems}
        donation={donation}
        selectedAddress={selectedAddress}
      />
      <div className="ml-5 grow">
        <PriceSummary selectedItems={selectedItems} donation={donation} />
      </div>
    </div>
  );
}

export default Payment;
