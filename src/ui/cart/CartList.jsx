import CartItemCard from './CartItemCard.jsx';
import CartAction from './CartAction.jsx';

function CartList({ cart, setCart, selectedItems, pincode }) {
  return (
    <div>
      <CartAction cart={cart} setCart={setCart} selectedItems={selectedItems} />
      {cart.map((item) => (
        <CartItemCard
          key={item.product.productId}
          item={item}
          cart={cart}
          setCart={setCart}
          pincode={pincode}
        />
      ))}
    </div>
  );
}

export default CartList;
