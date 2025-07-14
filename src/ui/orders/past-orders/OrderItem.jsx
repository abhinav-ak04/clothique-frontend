import OrderItemStatus from './OrderItemStatus';
import OrderItemDesc from './OrderItemDesc';

function OrderItem({
  price,
  status,
  StatusIcon,
  completionDate,
  company,
  description,
  size,
  img,
}) {
  // console.log(company, completionDate);
  return (
    <div className="mt-3 w-full bg-white px-5 py-1">
      <OrderItemStatus
        status={status}
        price={price}
        completionDate={completionDate}
        StatusIcon={StatusIcon}
      />
      <OrderItemDesc
        status={status}
        completionDate={completionDate}
        company={company}
        description={description}
        size={size}
        img={img}
      />
    </div>
  );
}

export default OrderItem;
