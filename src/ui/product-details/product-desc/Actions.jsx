import { CiHeart } from 'react-icons/ci';
import { HiShoppingBag } from 'react-icons/hi2';
function ProductDescAction() {
  return (
    <div className="mt-7 flex items-center gap-3 border-b-1 border-zinc-300 pb-5">
      <div className="bg-core-theme hover:bg-core-theme/90 flex cursor-pointer items-center justify-center gap-3 rounded-sm px-15 py-3 text-white">
        <HiShoppingBag className="text-xl" />
        <span className="font-bold">ADD TO BAG</span>
      </div>
      <div className="flex cursor-pointer items-center justify-center gap-2.5 rounded-sm border-1 border-zinc-300 px-8 py-3 text-zinc-800 hover:border-zinc-600">
        <CiHeart className="text-xl" />
        <span className="font-bold">WISHLIST</span>
      </div>
    </div>
  );
}

export default ProductDescAction;
