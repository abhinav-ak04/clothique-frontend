import { FaShippingFast } from 'react-icons/fa';
import { FaHouseCircleCheck } from 'react-icons/fa6';
import { HiReceiptRefund } from 'react-icons/hi2';
import { MdCancel, MdLocalShipping } from 'react-icons/md';

function OrderItemStatus({ status, price, expectedDeliveryDate }) {
  console.log(status);

  const statusIconMap = {
    Shipped: MdLocalShipping,
    'Out for Delivery': FaShippingFast,
    Delivered: FaHouseCircleCheck,
    Refunded: HiReceiptRefund,
    Cancelled: MdCancel,
  };

  const StatusIcon = statusIconMap[status];
  console.log('aaaaaaaaa', StatusIcon);

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

  return (
    <div className="flex items-center gap-4 py-3">
      <StatusIcon className="text-2xl text-zinc-700" />
      <div className="flex flex-col">
        <h2
          className={`text-sm font-bold ${status !== 'Refunded' ? (status === 'Cancelled' ? 'text-red-700' : 'text-emerald-700') : 'text-zinc-700'}`}
        >
          {status === 'Refunded' ? 'Refund Credited' : status}
        </h2>
        <div className="text-sm text-neutral-600">
          <span className="">
            {status === 'Refunded'
              ? `Your refund of ₹${price.toFixed(2)} for the return has been processed successfully on `
              : 'On '}
          </span>
          <span className="">
            {days[expectedDeliveryDate.getDay()]},{' '}
            {expectedDeliveryDate.getDate()}{' '}
            {months[expectedDeliveryDate.getMonth()]}{' '}
            {expectedDeliveryDate.getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderItemStatus;
