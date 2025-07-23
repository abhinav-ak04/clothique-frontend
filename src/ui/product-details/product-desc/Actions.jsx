import { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaArrowRight, FaHeart } from 'react-icons/fa';
import { HiShoppingBag } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../api/cart';
import { addToWishlist } from '../../../api/wishlist';
import { useCart } from '../../../contexts/CartContext';
import { useLoader } from '../../../contexts/LoaderContext';
import { useUser } from '../../../contexts/UserContext';
import { useWishlist } from '../../../contexts/WishlistContext';
import { transformCartItems } from '../../../utils/transform-cart';
import Loader from '../../shared/Loader';

function ProductDescAction({ _id, sizeSelected }) {
  const { userId, loading: userLoading } = useUser();
  const { setCart, loading: cartLoading } = useCart();
  const { wishlist, setWishlist, loading: wishlistLoading } = useWishlist();
  const { isLoading, startLoading, stopLoading } = useLoader();

  const navigate = useNavigate();
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const isInWishlist = wishlist.some(({ product }) => product._id === _id);

  const size = sizeSelected?.size;

  async function handleBagClick() {
    if (!size) return;

    if (isAddedToCart) {
      navigate('/checkout/cart');
      return;
    }

    startLoading();
    try {
      const { items } = await addToCart({
        userId,
        productId: _id,
        quantity: 1,
        size,
      });
      setCart(transformCartItems(items));
      setIsAddedToCart(true);
    } catch (error) {
      console.error('Error adding to bag', error);
    } finally {
      stopLoading();
    }
  }

  async function handleAddToWishlist() {
    startLoading();
    try {
      const newWishlist = await addToWishlist({ userId, productId: _id });
      setWishlist(newWishlist);
    } catch (error) {
      console.error('Error adding to bag', error);
    } finally {
      stopLoading();
    }
  }

  if (userLoading || cartLoading || wishlistLoading || isLoading)
    return <Loader />;

  return (
    <div className="mt-7 flex items-center gap-3 border-b-1 border-zinc-300 pb-5">
      <div
        className="bg-core-theme hover:bg-core-theme/90 flex cursor-pointer items-center justify-center gap-3 rounded-sm px-15 py-3 text-white"
        onClick={handleBagClick}
      >
        {!isAddedToCart && <HiShoppingBag className="text-xl" />}
        {isAddedToCart ? (
          <>
            <span className="font-bold">GO TO BAG</span>
            <FaArrowRight />
          </>
        ) : (
          <span className="font-bold">ADD TO BAG</span>
        )}
      </div>
      <div
        className={`flex items-center justify-center gap-2.5 rounded-sm border-1 border-zinc-300 px-8 py-3 hover:border-zinc-600 ${isInWishlist ? 'cursor-default bg-zinc-600' : 'cursor-pointer'}`}
        onClick={() => {
          !isInWishlist && handleAddToWishlist();
        }}
      >
        {isInWishlist ? (
          <FaHeart className="text-core-theme" />
        ) : (
          <CiHeart className="text-xl text-zinc-800" />
        )}
        <span
          className={`font-bold ${isInWishlist ? 'text-white' : 'text-zinc-800'}`}
        >
          {isInWishlist ? 'WISHLISTED' : 'WISHLIST'}
        </span>
      </div>
    </div>
  );
}

export default ProductDescAction;
