import { Outlet } from 'react-router-dom';
import Header from './cart-order-layout/Header';

function CartOrderLayout() {
  return (
    <div className="mt-3">
      <Header />
      <Outlet />
    </div>
  );
}

export default CartOrderLayout;
