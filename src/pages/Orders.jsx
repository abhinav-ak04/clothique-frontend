import { useOrder } from '../contexts/OrderContext';
import EmptyOrders from '../ui/orders/EmptyOrders';
import OrdersNav from '../ui/orders/OrdersNav';
import PastOrders from '../ui/orders/PastOrders';
import Loader from '../ui/shared/Loader';

function Orders() {
  const { orders, loading } = useOrder();

  if (loading) return <Loader />;

  if (!orders || orders.length === 0) return <EmptyOrders />;

  return (
    <div className="w-[680px] p-4">
      <OrdersNav />
      <PastOrders />
    </div>
  );
}

export default Orders;
