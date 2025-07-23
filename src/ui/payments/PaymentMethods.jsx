import { useEffect, useState } from 'react';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getAddressById } from '../../api/address';
import { getCartItems, removeCartItem } from '../../api/cart';
import { placeOrder } from '../../api/order';
import { useCart } from '../../contexts/CartContext';
import { useLoader } from '../../contexts/LoaderContext';
import { useOrder } from '../../contexts/OrderContext';
import { useUser } from '../../contexts/UserContext';
import { getPriceSummary } from '../../utils/price-calculator';
import { transformCartItems } from '../../utils/transform-cart';
import NavigateButton from '../shared/buttons/NavigateButton';
import Loader from '../shared/Loader';

function PaymentMethods({ selectedItems, donation, selectedAddress }) {
  const [orderAddress, setOrderAddress] = useState(null);
  const navigate = useNavigate();

  const { userId, loading: userLoading } = useUser();
  const { cart, setCart, loading: cartLoading } = useCart();
  const {
    orders: currentOrders,
    setOrders,
    loading: ordersLoading,
  } = useOrder();
  const { isLoading, startLoading, stopLoading } = useLoader();

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        startLoading();
        const { address } = await getAddressById(selectedAddress);
        setOrderAddress(address);
      } catch (error) {
        console.error('Error fetching address details', error);
      } finally {
        stopLoading();
      }
    };
    if (selectedAddress) fetchAddress();
  }, [selectedAddress]);

  async function removeCartItems() {
    if (selectedItems.length === 0) return;

    startLoading();
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
      stopLoading();
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

    startLoading();
    try {
      const { order } = await placeOrder(newOrder);

      // After the order is placed:
      // Remove the cart items which were ordered (selectedItems)
      await removeCartItems();

      // Update the Order-context
      const newOrders = [...currentOrders, order];
      setOrders(newOrders);

      // Navigate to the home page}
      navigate('/');
    } catch (error) {
      console.error('Error placing order', error);
    } finally {
      stopLoading();
    }
  }

  const [payemntMethod, setPaymentMethod] = useState(null);
  const isSelected = (method) => payemntMethod === method;

  if (userLoading || cartLoading || ordersLoading || isLoading)
    return <Loader />;

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
