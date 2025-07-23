import { useNavigate } from 'react-router-dom';
import { getPriceSummary } from '../../utils/price-calculator';
import ActionButton from '../shared/buttons/ActionButton';
import NavigateButton from '../shared/buttons/NavigateButton';

function PriceSummary({
  selectedItems,
  donation,
  navigatingMessage,
  navigateTo,
  selectedAddress,
}) {
  const navigate = useNavigate();

  function handlePlaceOrder() {
    navigate(navigateTo, {
      state: {
        selectedItems: selectedItems,
        donation: donation,
        selectedAddress,
      },
    });
  }

  const { totalItems, totalMRP, totalDiscount, platformFee, finalPrice } =
    getPriceSummary(selectedItems, donation);

  return (
    <div className="mt-5">
      <h2 className="mb-3 text-[13px] font-bold text-zinc-600">
        PRICE DETAILS ({totalItems} items)
      </h2>
      <div className="mb-2 flex items-center justify-between text-sm">
        <p className="text-zinc-800">Total MRP</p>
        <p className="text-zinc-800">₹{totalMRP}</p>
      </div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <p className="text-zinc-800">Discount on MRP</p>
          <ActionButton>Know More</ActionButton>
        </div>
        <p className="text-emerald-600">-₹{totalDiscount}</p>
      </div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <p className="text-zinc-800">Coupon Discount</p>
        <button className="cursor-pointer text-red-500">Apply Coupon</button>
      </div>
      {donation !== 0 && (
        <div className="mb-2 flex items-center justify-between text-sm">
          <p className="text-zinc-800">Social Work Donation</p>
          <p className="text-zinc-800">₹{donation}</p>
        </div>
      )}
      <div className="mb-2 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <p className="text-zinc-800">Platform Fee</p>
          <ActionButton>Know More</ActionButton>
        </div>
        <p className="text-zinc-800">₹{platformFee}</p>
      </div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <div>
          <div className="flex items-center gap-2">
            <p className="text-zinc-800">Shipping Fee</p>
            <ActionButton>Know More</ActionButton>
          </div>
          <p className="text-xs">Free shipping for you</p>
        </div>
        <p className="text-emerald-600">FREE</p>
      </div>
      <div className="mt-3 mb-4 flex items-center justify-between border-t-1 border-zinc-200 pt-3 font-bold text-zinc-700">
        <p>Total Amount</p>
        <p>₹{finalPrice}</p>
      </div>

      {navigatingMessage && (
        <NavigateButton onClick={handlePlaceOrder}>
          {navigatingMessage}
        </NavigateButton>
      )}
    </div>
  );
}

export default PriceSummary;
