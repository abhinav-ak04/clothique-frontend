import { NavLink } from 'react-router-dom';

function EmptyWishlist() {
  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="block text-[21px] font-bold text-zinc-800">
        YOUR WISHLIST IS EMPTY
      </h1>
      <p className="mt-5 w-95 text-center text-lg font-semibold text-zinc-400">
        Add items that you like to your wishlist. Review them anytime and easily
        move them to the bag.
      </p>
      <img
        src="https://harshcreation.com/images/emptywishlist.jpg"
        alt="Empty Wishlist"
        className="h-auto w-90"
      />
      <NavLink
        className="cursor-pointer rounded-sm border-1 border-blue-600 px-12 py-2.5 text-lg font-[650] text-blue-700"
        to="/"
      >
        CONTINUE SHOPPING
      </NavLink>
    </div>
  );
}

export default EmptyWishlist;
