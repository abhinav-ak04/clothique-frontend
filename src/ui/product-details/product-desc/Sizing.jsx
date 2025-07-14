import { MdKeyboardArrowRight } from 'react-icons/md';
import ActionButton from '../../shared/buttons/ActionButton';

function ProductDescSize({ sizes, sizeSelected, setSizeSelected }) {
  return (
    <div>
      <div className="mt-5 flex items-center gap-7 font-bold tracking-wide">
        <span className="text-zinc-900">SELECT SIZE</span>
        <ActionButton>
          <div className="flex items-center text-sm">
            <span>SIZE CHART</span>
            <MdKeyboardArrowRight className="text-lg font-extrabold" />
          </div>
        </ActionButton>
      </div>

      <div className="mt-4 flex items-center gap-4">
        {sizes.map((sizeObj, idx) => {
          const { size, isAvailable } = sizeObj;
          return (
            <div
              key={idx}
              className={`relative flex h-fit w-fit items-center justify-center rounded-full border-1 p-3 font-bold ${isAvailable ? `hover:border-core-theme cursor-pointer ${sizeSelected?.size === size ? 'text-core-theme border-core-theme' : 'border-zinc-400 text-zinc-900'}` : 'pointer-events-none border-zinc-300 text-zinc-300'}`}
              onClick={() => setSizeSelected(sizeObj)}
            >
              {size}
              {!isAvailable && (
                <div className="absolute h-[1px] w-[100%] -rotate-45 bg-zinc-300"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductDescSize;
