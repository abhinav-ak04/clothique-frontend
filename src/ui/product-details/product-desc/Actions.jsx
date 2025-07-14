import { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { HiShoppingBag } from 'react-icons/hi2';
import { addToCart } from '../../../api/cart';
import { addToWishlist } from '../../../api/wishlist';
import { useCart } from '../../../contexts/CartContext';
import { useUser } from '../../../contexts/UserContext';
import { useWishlist } from '../../../contexts/WishlistContext';
import { transformCartItems } from '../../../utils/transform-cart';

function ProductDescAction({ _id, sizeSelected }) {
  const { userId } = useUser();
  const { setCart } = useCart();
  const { setWishlist } = useWishlist();

  const [loading, setLoading] = useState(false);

  const size = sizeSelected?.size;

  async function handleAddToBag() {
    if (!size) return;

    setLoading(true);
    try {
      const { items } = await addToCart({
        userId,
        productId: _id,
        quantity: 1,
        size,
      });
      setCart(transformCartItems(items));
    } catch (error) {
      console.error('Error adding to bag', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleAddToWishlist() {
    setLoading(true);
    try {
      const newWishlist = await addToWishlist({ userId, productId: _id });
      setWishlist(newWishlist);
    } catch (error) {
      console.error('Error adding to bag', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-7 flex items-center gap-3 border-b-1 border-zinc-300 pb-5">
      <div
        className="bg-core-theme hover:bg-core-theme/90 flex cursor-pointer items-center justify-center gap-3 rounded-sm px-15 py-3 text-white"
        onClick={handleAddToBag}
      >
        <HiShoppingBag className="text-xl" />
        <span className="font-bold">ADD TO BAG</span>
      </div>
      <div
        className="flex cursor-pointer items-center justify-center gap-2.5 rounded-sm border-1 border-zinc-300 px-8 py-3 text-zinc-800 hover:border-zinc-600"
        onClick={handleAddToWishlist}
      >
        <CiHeart className="text-xl" />
        <span className="font-bold">WISHLIST</span>
      </div>
    </div>
  );
}

export default ProductDescAction;
