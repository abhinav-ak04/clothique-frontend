import { RiCouponLine } from 'react-icons/ri';

function CouponSelector() {
  return (
    <div className="border-b-1 border-zinc-100 pb-5">
      <h1 className="mb-2 text-[13px] font-bold text-zinc-600">COUPONS</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <RiCouponLine className="text-lg text-zinc-800" />
          <p className="text-sm font-bold text-zinc-800">Apply Coupons</p>
        </div>
        <button className="text-core-theme border-core-theme mr-3 cursor-pointer rounded-xs border-1 px-3 py-0.5 text-[12px] font-bold hover:bg-red-50">
          APPLY
        </button>
      </div>
    </div>
  );
}

export default CouponSelector;
