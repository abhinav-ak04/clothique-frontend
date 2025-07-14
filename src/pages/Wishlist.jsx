import { useWishlist } from '../contexts/WishlistContext';
import DisplayWishList from '../ui/wishlist/DisplayWishList';
import EmptyWishlist from '../ui/wishlist/EmptyWishlist';

function Wishlist() {
  const { wishlist } = useWishlist();
  console.log(wishlist);

  const isWishlistEmpty = wishlist.length === 0;

  return (
    <div className="m-10">
      {isWishlistEmpty ? (
        <EmptyWishlist />
      ) : (
        <DisplayWishList wishlist={wishlist} />
      )}
    </div>
  );
}

export default Wishlist;
