import { getOrderStatus } from '../../../utils/date-utils';
import OrderItemDesc from './OrderItemDesc';
import OrderItemStatus from './OrderItemStatus';

function OrderItem({ price, expectedDeliveryDate, brand, desc, size, img }) {
  const status = getOrderStatus(expectedDeliveryDate);

  return (
    <div className="mt-3 w-full bg-white px-5 py-1">
      <OrderItemStatus
        status={status}
        price={price}
        expectedDeliveryDate={expectedDeliveryDate}
      />
      <OrderItemDesc
        status={status}
        expectedDeliveryDate={expectedDeliveryDate}
        brand={brand}
        desc={desc}
        size={size}
        img={img}
      />
    </div>
  );
}

export default OrderItem;
