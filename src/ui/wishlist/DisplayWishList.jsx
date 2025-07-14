import { items } from '../../data/sample-wishlist';
import WishlistProduct from './WishlistProduct';

function DisplayWishList({ wishlist }) {
  return (
    <div className="ml-10">
      <h1 className="mb-9 text-lg font-bold text-zinc-800">
        My Wishlist
        <span className="ml-1 font-normal text-zinc-700">
          {' '}
          {wishlist.length} items
        </span>
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10">
        {wishlist.map(({ product }) => (
          <WishlistProduct
            key={product.productId}
            onClick=""
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default DisplayWishList;
