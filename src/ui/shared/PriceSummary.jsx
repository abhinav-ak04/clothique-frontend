import { useNavigate } from 'react-router-dom';
import ActionButton from '../shared/buttons/ActionButton';
import NavigateButton from '../shared/buttons/NavigateButton';

function PriceSummary({
  selectedItems,
  donation,
  navigatingMessage,
  navigateTo,
}) {
  const navigate = useNavigate();

  function handlePlaceOrder() {
    navigate(navigateTo, {
      state: {
        selectedItems: selectedItems,
        donation: donation,
      },
    });
  }

  const totalItems = selectedItems.length;

  const totalMRP = selectedItems.reduce((mrp, { quantity, product }) => {
    const { originalPrice } = product;
    return mrp + originalPrice * quantity;
  }, 0);

  const totalDiscount = selectedItems.reduce(
    (discount, { quantity, product }) => {
      const { originalPrice, discountPrice } = product;
      return discount + (originalPrice - discountPrice) * quantity;
    },
    0,
  );

  const platformFee = selectedItems.length ? 20 : 0;

  const finalPrice = totalMRP - totalDiscount + platformFee + donation;

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

      <NavigateButton onClick={handlePlaceOrder}>
        {navigatingMessage}
      </NavigateButton>
    </div>
  );
}

export default PriceSummary;
