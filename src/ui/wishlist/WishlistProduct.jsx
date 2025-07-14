import { NavLink } from 'react-router-dom';
import { addToCart } from '../../api/cart';
import { useCart } from '../../contexts/CartContext';
import { useUser } from '../../contexts/UserContext';
import { getSlicedString } from '../../utils/string-slicer';
import { transformCartItems } from '../../utils/transform-cart';
import { useState } from 'react';
import { useWishlist } from '../../contexts/WishlistContext';
import { removeWishlistItem } from '../../api/wishlist';

function WishlistProduct({ product, onClick }) {
  const {
    _id,
    productId,
    imgs,
    brand,
    desc,
    discountPrice,
    originalPrice,
    discount,
    sizes,
  } = product;

  const { userId } = useUser();
  const { setCart } = useCart();
  const { setWishlist } = useWishlist();

  const [loading, setLoading] = useState(false);

  async function handleAddToBag() {
    setLoading(true);

    // Add that item to the cart
    try {
      const { items } = await addToCart({
        userId,
        productId: _id,
        quantity: 1,
        size: sizes[0].size,
      });

      setCart(transformCartItems(items));
    } catch (error) {
      console.error('Error adding to cart', error);
      setLoading(false);
      return;
    }

    // Remove the item from the wishlist
    try {
      const newWishlist = await removeWishlistItem({ userId, productId: _id });
      if (Array.isArray(newWishlist)) setWishlist(newWishlist);
    } catch (error) {
      console.error('Error removing item from wishlist', error);
    } finally {
      setLoading(false);
    }
  }

  function handleRemove() {}

  return (
    <div onClick={onClick} className="relative w-55 border-1 border-zinc-200">
      <NavLink to={`/product/${productId}`}>
        <img
          src={imgs[0]}
          alt={`Product ${productId} Image`}
          className="h-auto w-full cursor-pointer"
        />
      </NavLink>
      <p className="mt-2 text-center text-zinc-800">
        {getSlicedString(brand + ' ' + desc, 28)}
      </p>
      <div className="mt-2 flex items-center justify-center gap-1.5 border-b-1 border-zinc-200 pb-4">
        <span className="text-[17px] font-bold text-zinc-800">
          ₹{discountPrice}
        </span>
        <span className="pt-0.5 text-[13px] text-zinc-600 line-through">
          ₹{originalPrice}
        </span>
        <span className="pt-0.5 text-[13px] font-bold text-orange-400">
          ({discount})
        </span>
      </div>
      <button
        onClick={handleAddToBag}
        className="text-core-theme w-full cursor-pointer py-3 text-center text-[15px] font-bold"
      >
        MOVE TO BAG
      </button>
      <button
        className="absolute top-2 right-2 flex size-6 cursor-pointer items-center justify-center rounded-full bg-white/70 p-1 text-zinc-800"
        onClick={handleRemove}
      >
        <span className="leading-node text-xl">&times;</span>
      </button>
    </div>
  );
}

export default WishlistProduct;
