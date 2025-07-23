import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import CartList from '../ui/cart/CartList';
import OrderSummary from '../ui/cart/OrderSummary';
import Loader from '../ui/shared/Loader';
import EmptyCart from '../ui/cart/EmptyCart';

function Cart() {
  const { cart, setCart, loading: cartLoading } = useCart();
  const [pincode, setPincode] = useState('1');

  const selectedItems = cart.filter((item) => item.isSelected);

  if (cartLoading) return <Loader />;

  if (!cart || cart.length === 0) return <EmptyCart />;

  return (
    <div className="mx-35 flex px-2.5">
      <div className="w-[63%] border-r-1 border-zinc-200 pr-5">
        {/* <PincodeSelector pincode={pincode} setPincode={setPincode} /> */}
        <CartList
          pincode={pincode}
          cart={cart}
          setCart={setCart}
          selectedItems={selectedItems}
        />
      </div>
      <OrderSummary selectedItems={selectedItems} />
    </div>
  );
}

export default Cart;

function PincodeSelector({ pincode, setPincode }) {
  return (
    <div className="mb-2 flex cursor-pointer items-center justify-between rounded-md border-1 border-zinc-200 bg-red-50 p-4">
      <div className="">
        {pincode ? (
          <div className="flex items-center gap-1 text-sm text-zinc-900">
            <span className="">Deliver to:</span>
            <span className="font-bold">{pincode}</span>
          </div>
        ) : (
          <span className="text-sm font-semibold">
            Check delivery time & services
          </span>
        )}
      </div>
      <div className="border-core-theme text-core-theme rounded-md border-1 px-4 py-2 text-[12px] font-bold">
        CHANGE ADDRESS
      </div>
    </div>
  );
}
