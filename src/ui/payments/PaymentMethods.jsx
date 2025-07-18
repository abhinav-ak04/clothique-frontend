import { useEffect, useState } from 'react';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { getAddressById } from '../../api/address';
import { placeOrder } from '../../api/order';
import { useUser } from '../../contexts/UserContext';
import { getPriceSummary } from '../../utils/price-calculator';
import NavigateButton from '../shared/buttons/NavigateButton';
import { useCart } from '../../contexts/CartContext';
import { getCartItems, removeCartItem } from '../../api/cart';
import { transformCartItems } from '../../utils/transform-cart';
import { useNavigate } from 'react-router-dom';

function PaymentMethods({ selectedItems, donation, selectedAddress }) {
  const { userId } = useUser();
  const { cart, setCart } = useCart();

  const [loading, setLoading] = useState(false);
  const [orderAddress, setOrderAddress] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        setLoading(true);
        const { address } = await getAddressById(selectedAddress);
        setOrderAddress(address);
      } catch (error) {
        console.error('Error fetching address details', error);
        setLoading(false);
        return;
      }
    };
    if (selectedAddress) fetchAddress();
  }, [selectedAddress]);

  async function removeCartItems() {
    if (selectedItems.length === 0) return;

    setLoading(true);
    try {
      for (const { product, selectedSize } of selectedItems) {
        await removeCartItem({
          userId,
          productId: product._id,
          size: selectedSize,
        });
      }
      const newCart = await getCartItems(userId);
      setCart(transformCartItems(newCart));
    } catch (error) {
      console.error('Error removing from the cart', error);
    } finally {
      setLoading(false);
    }
  }

  async function handlePlaceOrder() {
    const products = selectedItems.map(
      ({ product, quantity, selectedSize }) => {
        return {
          product: product._id,
          quantity,
          size: selectedSize,
        };
      },
    );

    const { finalPrice } = getPriceSummary(selectedItems, donation);

    const { addressLine, locality, city, state, pincode } = orderAddress;
    const addressString = `${addressLine}, ${locality}, ${city}, ${state} - ${pincode}`;

    const newOrder = {
      userId,
      products,
      totalAmount: finalPrice,
      deliveryAddress: addressString,
    };

    const { order } = await placeOrder(newOrder);

    // After the order is placed:
    await removeCartItems(); // Remove the cart items which were ordered (selectedItems)
    navigate('/'); // Navigate to the home page
  }

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
            <NavigateButton onClick={handlePlaceOrder}>
              PLACE ORDER
            </NavigateButton>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentMethods;
