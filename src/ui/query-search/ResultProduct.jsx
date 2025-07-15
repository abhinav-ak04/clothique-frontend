import { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getRatings } from '../../utils/ratings-calculator';
import { getSlicedString } from '../../utils/string-slicer';
import { getFirstAvailableSize } from '../../utils/default-size-getter';

function ResultProduct({ product }) {
  const {
    productId,
    brand,
    imgs,
    desc,
    discountPrice,
    originalPrice,
    discount,
    ratings,
    sizes,
  } = product;

  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  const newDesc = getSlicedString(desc, 30);
  const { overallRating, totalRatings } = getRatings(ratings);
  const defaultSize = getFirstAvailableSize(sizes);

  function handleProductClick() {
    // navigate(`/product/${productId}`, { state: { item } });
    navigate(`/product/${productId}`);
  }

  return (
    <div
      className="relative w-52.5 cursor-pointer hover:shadow-sm"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={handleProductClick}
    >
      <img src={imgs[0]} alt="Product Image" className="h-70 w-full" />
      {!isHover && (
        <div className="absolute top-62.5 left-2 z-10 rounded-sm bg-white/70 px-2 py-0.5">
          <div className="flex items-center gap-1">
            <span className="text-xs font-bold">{overallRating}</span>
            <FaStar className="text-xs text-teal-600" />
            <span className="text-xs">|</span>
            <span className="text-xs font-bold">{totalRatings}</span>
          </div>
        </div>
      )}
      <div className="mt-2">
        {isHover && (
          <div className="absolute top-63 w-full rounded-xs bg-white py-2">
            <div className="m-2 flex items-center justify-center gap-2 rounded-xs border-1 border-zinc-300 py-1.5 hover:border-zinc-500">
              <CiHeart className="text-xl" />
              <span className="text-xs font-bold text-zinc-800">WISHLIST</span>
            </div>
            <h1 className="pl-3 text-sm text-zinc-500">Sizes: {defaultSize}</h1>
          </div>
        )}
        <h1 className="text-md px-2.5 font-bold">{brand}</h1>
        <p className="w-full px-2.5 text-sm text-zinc-600">{newDesc}</p>
        <div className="mt-2 flex items-end gap-1 px-2.5 pb-2">
          <span className="text-sm leading-none font-bold">
            Rs. {discountPrice}
          </span>
          <span className="text-xs leading-none text-zinc-500 line-through">
            Rs. {originalPrice}
          </span>
          <span className="text-xs leading-none text-orange-400">
            ({discount}% OFF)
          </span>
        </div>
      </div>
    </div>
  );
}

export default ResultProduct;
