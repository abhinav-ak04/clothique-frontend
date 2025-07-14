import { useLocation } from 'react-router-dom';
import PaymentMethods from '../ui/payments/PaymentMethods';
import PriceSummary from '../ui/shared/PriceSummary';

function Payment() {
  const location = useLocation();
  const { selectedItems, donation } = location.state || {
    selectedItems: [],
    donation: 0,
  };

  return (
    <div className="mx-30 flex px-2.5">
      <PaymentMethods />
      <div className="ml-5 grow">
        <PriceSummary
          selectedItems={selectedItems}
          donation={donation}
          navigatingMessage="CONTINUE"
          navigateTo="/checkout/payment"
        />
      </div>
    </div>
  );
}

export default Payment;
