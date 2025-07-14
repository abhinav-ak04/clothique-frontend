import { useState } from 'react';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import NavigateButton from '../shared/buttons/NavigateButton';

function PaymentMethods() {
  const [payemntMethod, setPaymentMethod] = useState(null);
  const isSelected = (method) => payemntMethod === method;

  return (
    <div className={`w-[67%] border-r-1 border-zinc-200 pt-5 pr-8`}>
      <h1 className="text-lg font-bold text-zinc-700">Choose Payment Method</h1>
      <div className="mt-5 mr-5 flex w-full rounded-xs border-1 border-zinc-200">
        <div className="flex w-1/3 items-center border-r-1 border-r-zinc-100">
          <div className="border-l-core-theme flex items-center gap-3 border-l-5 px-3 py-4">
            <FaRegMoneyBillAlt className="text-zinc-700" />
            <p className="text-core-theme text-[15px] font-bold">
              Cash On Delivery
            </p>
          </div>
        </div>
        <div className="p-5">
          <h1 className="text-lg font-bold text-zinc-700">
            Cash On Delivery (Cash/UPI)
          </h1>
          <div
            className="mb-5 flex items-center gap-3"
            onClick={() => !isSelected('cod') && setPaymentMethod('cod')}
          >
            <input
              type="radio"
              checked={isSelected('cod')}
              className={`checked:bg-core-theme checked:outline-core-theme mt-1 mr-4 h-3 w-3 cursor-pointer appearance-none rounded-full outline outline-offset-3 outline-zinc-400 transition-opacity outline-solid checked:border-transparent`}
            />
            <p className="font-bold text-zinc-700">
              Cash On Delivery (Cash/UPI)
            </p>
          </div>
          {isSelected('cod') && (
            <NavigateButton onClick="">PLACE ORDER </NavigateButton>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentMethods;
