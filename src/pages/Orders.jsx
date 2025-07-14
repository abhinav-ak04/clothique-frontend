import OrdersNav from '../ui/orders/OrdersNav';
import PastOrders from '../ui/orders/PastOrders';

function Orders() {
  return (
    <div className="w-[680px] p-4">
      <OrdersNav />
      <PastOrders />
    </div>
  );
}

export default Orders;
