import { IoIosStar } from 'react-icons/io';
function ProductDescHead({ brand, desc, ratings }) {
  const [five, four, three, two, one] = ratings;
  const totalRatings = five + four + three + two + one;
  const overallRating = (
    (five * 5 + four * 4 + three * 3 + two * 2 + one) /
    totalRatings
  ).toFixed(1);
  return (
    <div className="border-b-1 border-zinc-300 pb-3">
      <h1 className="text-2xl font-bold text-zinc-900">{brand}</h1>
      <p className="pt-1 pr-5 pb-3 text-xl text-zinc-500">{desc}</p>
      <div className="flex w-fit cursor-pointer rounded-xs border-1 border-zinc-200 px-2 py-1 hover:border-zinc-600">
        <div className="flex items-center gap-1.5">
          <span className="font-bold">{overallRating}</span>
          <IoIosStar className="text-sm text-teal-600" />
        </div>
        <span className="mx-1.5 text-zinc-400">|</span>
        <span className="text-zinc-600">{totalRatings} Ratings</span>
      </div>
    </div>
  );
}

export default ProductDescHead;
