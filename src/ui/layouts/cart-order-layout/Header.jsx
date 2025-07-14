import Logo from '../../shared/Logo';
import LayoutHead from './LayoutHead';

function Header() {
  return (
    <div className="flex justify-between border-b-1 border-zinc-100 pr-20 pb-4 pl-4">
      <Logo />
      <div className="flex items-center gap-2 text-[12.5px] font-semibold tracking-[0.25em] text-zinc-500">
        <LayoutHead name="BAG" to="/checkout/cart" />
        <span className="w-12 border-t-1 border-dashed border-zinc-800"></span>
        <LayoutHead name="ADDRESS" to="/checkout/address" />
        <span className="w-12 border-t-1 border-dashed border-zinc-800"></span>
        <LayoutHead name="PAYMENT" to="/checkout/payment" />
      </div>
      <div className="flex items-center gap-1">
        <img
          src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
          className="h-7 w-6.5"
        />
        <p className="text-[12.5px] font-semibold tracking-[0.2em] text-zinc-500">
          100% SECURE
        </p>
      </div>
    </div>
  );
}

export default Header;
