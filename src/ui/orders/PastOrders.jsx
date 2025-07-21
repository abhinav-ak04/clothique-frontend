import { useOrder } from '../../contexts/OrderContext';
import OrderItem from './past-orders/OrderItem';

function PastOrders() {
  const { orders } = useOrder();

  return (
    <div className="bg-zinc-100 px-3 py-4">
      {orders.flatMap(({ products, expectedDeliveryDate }) => {
        return products.map(({ _id, product, size, priceAtPurchase }) => {
          const { imgs, desc, brand } = product;
          return (
            <OrderItem
              key={_id}
              price={priceAtPurchase}
              expectedDeliveryDate={new Date(expectedDeliveryDate)}
              brand={brand}
              desc={desc}
              size={size}
              img={imgs[0]}
            />
          );
        });
      })}
    </div>
  );
}

export default PastOrders;
