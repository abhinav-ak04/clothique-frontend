import { FaCircle } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import StarRating from './StarRating';
import { useState } from 'react';

function OrderItemDesc({
  status,
  completionDate,
  company,
  description,
  size,
  img,
}) {
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const exchangeDate = new Date(completionDate);
  exchangeDate.setDate(exchangeDate.getDate() + 7);

  return (
    <div className="">
      <NavLink className="flex justify-between bg-zinc-100 p-3">
        <div className="flex gap-5">
          <img
            src={img}
            alt="Order Item Image"
            className="h-17 w-12 rounded-md"
          ></img>
          <div className="flex flex-col justify-center">
            <h2 className="text-sm font-bold">{company}</h2>
            <p className="text-sm">{description}</p>
            <p className="text-sm">Size: {size}</p>
          </div>
        </div>
        <div className="flex items-center">
          <MdKeyboardArrowRight className="text-2xl text-zinc-700" />
        </div>
      </NavLink>
      {status == 'Delivered' && (
        <div className="flex items-center gap-3 bg-zinc-100 p-3">
          <FaCircle className="text-[9px] text-neutral-500" />
          <p className="text-sm text-neutral-500">
            Exchange/Return window closed on {days[exchangeDate.getDay()]},{' '}
            {exchangeDate.getDate()} {months[exchangeDate.getMonth()]}{' '}
            {exchangeDate.getFullYear()}
          </p>
        </div>
      )}

      {status !== 'Cancelled' && (
        <div className="bg-zinc-100 p-3">
          <StarRating
            hoverRating={hoverRating}
            selectedRating={selectedRating}
            setHoverRating={setHoverRating}
            setSelectedRating={setSelectedRating}
          />

          {selectedRating > 0 && (
            <div className="mt-3 flex justify-between">
              <p className="text-sm">Your opinion matters! Leave a review.</p>
              <NavLink className="text-core-theme text-sm font-bold">
                Write Review
              </NavLink>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default OrderItemDesc;
