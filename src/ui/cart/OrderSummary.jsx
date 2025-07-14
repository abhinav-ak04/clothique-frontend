import { useState } from 'react';
import CouponSelector from './CouponSelector';
import DonationSelector from './DonationSelector';
import PriceSummary from '../shared/PriceSummary';

function OrderSummary({ selectedItems }) {
  const [donation, setDonation] = useState(0);

  return (
    <div className="mt-6 ml-5 grow">
      <CouponSelector />
      <DonationSelector donation={donation} setDonation={setDonation} />
      <PriceSummary
        selectedItems={selectedItems}
        donation={donation}
        navigatingMessage="PLACE ORDER"
        navigateTo="/checkout/address"
      />
    </div>
  );
}

export default OrderSummary;
