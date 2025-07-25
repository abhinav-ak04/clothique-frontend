import { useState } from 'react';
import { IoIosCheckbox } from 'react-icons/io';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { RiCheckboxIndeterminateFill } from 'react-icons/ri';
import { getCartItems, removeCartItem } from '../../api/cart.js';
import { addToWishlist, getWishlistItems } from '../../api/wishlist.js';
import { useUser } from '../../contexts/UserContext.jsx';
import { useWishlist } from '../../contexts/WishlistContext.jsx';
import { transformCartItems } from '../../utils/transform-cart.js';
import Loader from '../shared/Loader.jsx';
import { useLoader } from '../../contexts/LoaderContext.jsx';

function CartAction({ cart, setCart, selectedItems }) {
  const { userId, loading: userLoading } = useUser();
  const { setWishlist, loading: wishlistLoading } = useWishlist();

  const { isLoading, startLoading, stopLoading } = useLoader();

  async function handleRemove() {
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

  async function handleAddToWishlist() {
    if (selectedItems.length === 0) return;

    startLoading();
    try {
      for (const { product } of selectedItems) {
        await addToWishlist({ userId, productId: product._id });
      }

      const newWishlist = await getWishlistItems(userId);
      setWishlist(newWishlist);
    } catch (error) {
      console.error('Error adding to wishlist', error);
      stopLoading();
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
      stopLoading();
    }
  }

  function handleUpdateSelected() {
    if (selectedItems.length === 0) {
      setCart((cart) => cart.map((item) => ({ ...item, isSelected: true })));
    } else {
      setCart((cart) => cart.map((item) => ({ ...item, isSelected: false })));
    }
  }

  if (userLoading || wishlistLoading || isLoading) return <Loader />;

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

export default CartAction;
