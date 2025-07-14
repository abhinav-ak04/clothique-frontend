import { IoIosCheckbox } from 'react-icons/io';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { RiCheckboxIndeterminateFill } from 'react-icons/ri';
import CartItemCard from './CartItemCard.jsx';
import { useState } from 'react';
import { useUser } from '../../contexts/UserContext.jsx';
import { addToWishlist, getWishlistItems } from '../../api/wishlist.js';
import { useWishlist } from '../../contexts/WishlistContext.jsx';
import { getCartItems, removeCartItem } from '../../api/cart.js';
import { transformCartItems } from '../../utils/transform-cart.js';
import { useCart } from '../../contexts/CartContext.jsx';

function CartList({ cart, setCart, selectedItems, pincode }) {
  return (
    <div>
      <CartAction cart={cart} setCart={setCart} selectedItems={selectedItems} />
      {cart.map((item) => (
        <CartItemCard
          key={item.product.productId}
          item={item}
          cart={cart}
          setCart={setCart}
          pincode={pincode}
        />
      ))}
    </div>
  );
}

export default CartList;

function CartAction({ cart, setCart, selectedItems }) {
  const { userId } = useUser();
  const { setWishlist } = useWishlist();

  const [loading, setLoading] = useState(false);

  async function handleRemove() {
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

  async function handleAddToWishlist() {
    if (selectedItems.length === 0) return;

    setLoading(true);

    // Add items to wishlist
    try {
      for (const { product } of selectedItems) {
        await addToWishlist({ userId, productId: product._id });
      }

      const newWishlist = await getWishlistItems(userId);
      setWishlist(newWishlist);
    } catch (error) {
      console.error('Error adding to wishlist', error);
      setLoading(false);
      return;
    }

    // Remove items from cart
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

  function handleUpdateSelected() {
    if (selectedItems.length === 0) {
      setCart((cart) => cart.map((item) => ({ ...item, isSelected: true })));
    } else {
      setCart((cart) => cart.map((item) => ({ ...item, isSelected: false })));
    }
  }

  return (
    <div className="my-7 flex items-center justify-between pr-3 pl-2.5">
      <div className="flex items-center gap-2">
        <button onClick={handleUpdateSelected} className="text-xl">
          {selectedItems.length === 0 ? (
            <MdOutlineCheckBoxOutlineBlank />
          ) : selectedItems.length === cart.length ? (
            <IoIosCheckbox className="text-core-theme" />
          ) : (
            <RiCheckboxIndeterminateFill className="text-core-theme" />
          )}
        </button>

        <p className="font-bold text-zinc-800">
          {selectedItems.length}/{cart.length} ITEMS SELECTED
        </p>
      </div>
      <div className="flex items-center text-xs font-bold text-zinc-600">
        <button
          className="cursor-pointer border-r-1 border-zinc-300 py-2 pr-10"
          onClick={handleRemove}
        >
          REMOVE
        </button>
        <button
          className="cursor-pointer py-2 pl-10"
          onClick={handleAddToWishlist}
        >
          ADD TO WISHLIST
        </button>
      </div>
    </div>
  );
}
