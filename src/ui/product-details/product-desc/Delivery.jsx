import { useState } from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { MdOutlinePayments } from 'react-icons/md';
import { TbArrowsExchange2 } from 'react-icons/tb';
import DeliveryCharacteristics from './DeliveryCharacteristics';
import ActionButton from '../../shared/buttons/ActionButton';

function ProductDescDelivery({ deliveryDateString, pincode, setPincode }) {
  const [pincodeInput, setPincodeInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setPincode(pincodeInput);
  }

  return (
    <div className="mt-6 border-b-1 border-zinc-300 pb-5">
      <div className="mb-4 flex items-center gap-2 text-zinc-900">
        <span className="font-bold">DELIVERY OPTIONS</span>
        <CiDeliveryTruck className="pt-0.5 text-2xl" />
      </div>

      <form
        className={`relative ${pincode ? 'mb-5' : 'mb-1.5'} w-full items-center`}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter pincode"
          value={pincodeInput}
          onChange={(e) => setPincodeInput(e.target.value)}
          disabled={pincode}
          required
          maxLength={6}
          className={`w-60 rounded-md border-1 border-zinc-300 p-2 text-[15px] text-zinc-800 ${pincode && 'bg-zinc-100'} placeholder:text-zinc-500 focus:outline-none`}
        />
        {pincode ? (
          <>
            <div className="absolute top-[8px] left-47.5">
              <ActionButton
                onClick={() => {
                  setPincode('');
                  setPincodeInput('');
                }}
              >
                Change
              </ActionButton>
            </div>
            <IoCheckmarkCircle className="absolute top-3 left-19 text-[18px] text-emerald-500" />
          </>
        ) : (
          <input
            type="submit"
            value="Check"
            className="text-core-theme absolute top-[11px] left-47.5 cursor-pointer text-[13px] font-bold"
          />
        )}
      </form>

      {pincode ? (
        <>
          <DeliveryCharacteristics
            Icon={LiaShippingFastSolid}
            content={`Get it by ${deliveryDateString}`}
          />
          <DeliveryCharacteristics
            Icon={MdOutlinePayments}
            content="Pay on delivery available"
          />
          <DeliveryCharacteristics
            Icon={TbArrowsExchange2}
            content="Easy 7 days return & exchange available"
          />
        </>
      ) : (
        <p className="mb-5 text-xs text-zinc-700">
          Please enter PIN code to check delivery time & Pay on Delivery
          Availability
        </p>
      )}
      <p className="text-[15px] leading-6.5 text-zinc-700">
        100% Original Products
      </p>
      {!pincode && (
        <>
          <p className="text-[15px] leading-6.5 text-zinc-700">
            Pay on delivery might be available
          </p>
          <p className="text-[15px] leading-6.5 text-zinc-700">
            Easy 14 days returns and exchanges
          </p>
        </>
      )}
    </div>
  );
}

export default ProductDescDelivery;
