import { FaCheck } from 'react-icons/fa6';
import { IoMdArrowDropdown } from 'react-icons/io';
import { LiaTimesSolid } from 'react-icons/lia';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { PiKeyReturn } from 'react-icons/pi';
import { getDeliveryDateString } from '../../utils/date-utils';

function CartItemCard({ item, cart, setCart, pincode }) {
  const {
    productId,
    imgs,
    brand,
    desc,
    seller,
    sizes,
    discountPrice,
    originalPrice,
    discount,
    deliveryDuration,
  } = item.product;

  const { quantity, isSelected, selectedSize } = item;

  function toggleSelected(itemId) {
    setCart((prevCart) =>
      prevCart.map((item) => ({
        ...item,
        isSelected:
          item.product.productId === itemId
            ? !item.isSelected
            : item.isSelected,
      })),
    );
  }

  function handleRemove(itemId) {
    setCart((prevCart) => prevCart.filter((item) => item.productId !== itemId));
  }

  const deliveryDateString = getDeliveryDateString(deliveryDuration);

  return (
    <div className="relative">
      <div className="mb-2 flex justify-between rounded-md border-1 border-zinc-200 p-2.5">
        <div className="flex">
          <img className="mr-4 h-37 w-28" src={imgs[0]} alt="Item Image" />
          <div>
            <h1 className="text-[13px] font-bold text-zinc-900">{brand}</h1>
            <p className="text-sm">{desc}</p>
            <p className="text-xs text-zinc-400">Sold by: {seller}</p>
            <div className="mt-3 flex items-center gap-5">
              <div className="flex cursor-pointer items-center gap-1 rounded-md bg-zinc-100 px-1 py-0.5 text-[13px] font-bold text-zinc-900">
                <p>Size: {selectedSize}</p>
                <IoMdArrowDropdown className="pt-0.5" />
              </div>
              <div className="flex cursor-pointer items-center gap-1 rounded-md bg-zinc-100 px-1 py-0.5 text-[13px] font-bold text-zinc-900">
                <p>Qty: {quantity}</p>
                <IoMdArrowDropdown className="pt-0.5" />
              </div>
            </div>
            <div className="mt-4 mb-2 flex gap-2">
              <span className="text-[15px] font-bold text-zinc-900">
                ₹{discountPrice}
              </span>
              <span className="text-[15px] text-zinc-600 line-through">
                ₹{originalPrice}
              </span>
              <span className="text-[15px] text-red-400">{discount}</span>
            </div>
            <div className="mb-2 flex gap-1">
              <PiKeyReturn className="text-[16px]" />
              <span className="text-xs font-bold">14 days</span>
              <span className="text-xs">return available</span>
            </div>
            {pincode && (
              <div className="flex items-center gap-1 text-sm text-zinc-900">
                <FaCheck className="text-emerald-500" />
                <span className="">Delivery by</span>
                <span className="font-bold">{deliveryDateString}</span>
              </div>
            )}
          </div>
        </div>
        <LiaTimesSolid
          className="cursor-pointer"
          onClick={() => handleRemove(productId)}
        />
      </div>
      <button onClick={() => toggleSelected(productId)} className="text-xl">
        {isSelected ? (
          // <IoIosCheckbox className="text-core-theme" />
          <div className="bg-core-theme absolute top-4 left-4 flex h-4 w-4 items-center justify-center rounded-xs">
            <FaCheck className="text-xs text-white" />
          </div>
        ) : (
          <MdOutlineCheckBoxOutlineBlank className="absolute top-3.5 left-3.5" />
        )}
      </button>
    </div>
  );
}

export default CartItemCard;
