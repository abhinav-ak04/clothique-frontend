import { HiOutlineSparkles } from 'react-icons/hi2';
import { IoIosStar } from 'react-icons/io';
import { getRatings } from '../../../utils/ratings-calculator';
import { sliceNumberToThousands } from '../../../utils/thousand-slicer';

function ProductDescRatings({ ratings }) {
  const { overallRating, totalRatings } = getRatings(ratings);

  const ratingColors = {
    5: 'bg-teal-600',
    4: 'bg-teal-600',
    3: 'bg-teal-600/50',
    2: 'bg-yellow-500',
    1: 'bg-red-500/70',
  };

  return (
    <div className="mt-6">
      <div className="flex items-center gap-2 text-zinc-900">
        <h1 className="text-lg font-bold">Ratings</h1>
        <HiOutlineSparkles className="text-xl" />
      </div>
      <div className="mt-2 flex items-center gap-2">
        <div className="border-r-1 border-zinc-200 py-2 pr-6">
          <div className="flex items-center gap-2">
            <span className="text-[42px] text-zinc-900">{overallRating}</span>
            <IoIosStar className="text-2xl text-teal-600" />
          </div>
          <p className="text-sm text-zinc-800">
            {sliceNumberToThousands(totalRatings)} Verified Buyers
          </p>
        </div>
        <div className="ml-7">
          {ratings.map((rating, idx) => {
            const percentage = (rating / totalRatings) * 100;
            return (
              <div key={idx} className="flex items-center gap-1.5 text-[13px]">
                <span className="text-zinc-400">{5 - idx}</span>
                <IoIosStar className="text-[11px] text-zinc-300" />
                <div className="relative h-1 w-[150px] bg-gray-200">
                  <div
                    className={`absolute top-0 left-0 h-1 ${ratingColors[5 - idx]}`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="text-zinc-700">{rating}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductDescRatings;
