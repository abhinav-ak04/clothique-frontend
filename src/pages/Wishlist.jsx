import { useLoader } from '../contexts/LoaderContext';
import { useWishlist } from '../contexts/WishlistContext';
import Loader from '../ui/shared/Loader';
import DisplayWishList from '../ui/wishlist/DisplayWishList';
import EmptyWishlist from '../ui/wishlist/EmptyWishlist';

function Wishlist() {
  const { wishlist, loading: wishlistLoading } = useWishlist();

  const isWishlistEmpty = wishlist.length === 0;

  const { isLoading } = useLoader();

  if (isLoading || wishlistLoading) return <Loader />;

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
