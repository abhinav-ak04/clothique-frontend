import { BiDetail } from 'react-icons/bi';
function ProductDescDetails({ details, sizeAndFit, materialAndCare, specs }) {
  return (
    <div className="mt-6 border-b-1 border-zinc-300 pb-5">
      <div className="mb-3 flex items-center gap-2 text-zinc-900">
        <h1 className="font-bold">PRODUCT DETAILS</h1>
        <BiDetail />
      </div>

      {details.map((item, idx) => (
        <p key={idx} className="text-[15px] text-zinc-700">
          {item}
        </p>
      ))}

      <h2 className="mt-3 font-bold text-zinc-800">Size & Fit</h2>
      {sizeAndFit.map((item, idx) => (
        <p key={idx} className="text-[15px] text-zinc-700">
          {item}
        </p>
      ))}

      <h2 className="mt-3 font-bold text-zinc-800">Material & Care</h2>
      {materialAndCare.map((item, idx) => (
        <p key={idx} className="text-[15px] text-zinc-700">
          {item}
        </p>
      ))}

      <h2 className="mt-3 mb-2 font-bold text-zinc-800">Specifications</h2>
      <div className="flex flex-wrap justify-between">
        {specs.map(({ prop, value }, idx) => (
          <div
            key={idx}
            className="mr-7 mb-3 w-2/5 border-b-1 border-zinc-200 pb-3"
          >
            <p className="text-xs text-zinc-500">{prop}</p>
            <p className="text-[15px] text-zinc-700">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDescDetails;
