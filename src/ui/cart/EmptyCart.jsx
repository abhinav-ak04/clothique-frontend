import { NavLink } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="mt-20 flex w-full flex-col items-center">
      <img src="/empty-cart.png" alt="Empty Cart" className="h-auto w-36" />
      <h2 className="mt-4 block text-[20px] font-bold text-zinc-700">
        Hey, it feels so light!
      </h2>
      <p className="mt-1 w-95 text-center text-sm font-semibold text-zinc-400">
        There is nothing in your bag. Let&apos;s add some items.
      </p>
      <NavLink
        className="border-core-theme text-core-theme mt-5 cursor-pointer rounded-sm border-1 px-3 py-2 text-[15px] font-bold tracking-wide"
        to="/wishlist"
      >
        ADD ITEMS FROM WISHLIST
      </NavLink>
    </div>
  );
}

export default EmptyCart;
