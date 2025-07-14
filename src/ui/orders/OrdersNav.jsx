import { PiSlidersHorizontalFill } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';
import OrderSearchBox from './OrderSearchBox';

function OrdersNav() {
  return (
    <div className="my-4 flex items-center justify-between">
      <div className="ml-4 flex flex-col items-center">
        <h2 className="font-bold">All Orders</h2>
        <p>from anytime</p>
      </div>
      <div className="mr-4 flex">
        <OrderSearchBox />
        <NavLink className="ml-4 flex items-center rounded-sm border border-zinc-300 px-2">
          <PiSlidersHorizontalFill className="text-zinc-500" />
          <p className="ml-1 text-sm font-bold text-zinc-800">FILTER</p>
        </NavLink>
      </div>
    </div>
  );
}

export default OrdersNav;
