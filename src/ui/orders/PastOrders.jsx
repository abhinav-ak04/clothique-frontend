import { orders } from '../../data/sample-orders';
import OrderItem from './past-orders/OrderItem';
function PastOrders() {
  return (
    <div className="bg-zinc-100 px-3 py-4">
      {orders.map(
        ({
          orderId,
          price,
          status,
          StatusIcon,
          completionDate,
          company,
          description,
          size,
          img,
        }) => (
          <OrderItem
            key={orderId}
            price={price}
            status={status}
            StatusIcon={StatusIcon}
            completionDate={completionDate}
            company={company}
            description={description}
            size={size}
            img={img}
          />
        ),
      )}
    </div>
  );
}

export default PastOrders;
