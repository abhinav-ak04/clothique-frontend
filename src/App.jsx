import { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import './index.css';

import RefreshHandler from '../RefreshHandler';
import { useUser } from './contexts/UserContext';
import Cart from './pages/Cart';
import CheckoutAddress from './pages/CheckoutAddress';
import Club from './pages/Club';
import ContactUs from './pages/ContactUs';
import Coupons from './pages/Coupons';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import MobileAuth from './pages/MobileAuth';
import MyAddresses from './pages/MyAddresses';
import Orders from './pages/Orders';
import PageNotFound from './pages/PageNotFound';
import Payment from './pages/Payment';
import ProductDetails from './pages/ProductDetails';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import QuerySearch from './pages/QuerySearch';
import Signup from './pages/Signup';
import Wishlist from './pages/Wishlist';
import AccountLayout from './ui/layouts/AccountLayout';
import AppLayout from './ui/layouts/AppLayout';
import CartOrderLayout from './ui/layouts/CartOrderLayout';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(
  //   !!localStorage.getItem('token'),
  // );
  const { userId, setUserId, setUserData } = useUser();
  const navigate = useNavigate();

  // Listen for force-logout event and redirect
  useEffect(() => {
    function handleForceLogout() {
      // setIsAuthenticated(false);
      setUserId(null);
      setUserData(null);
      navigate('/mobile-auth');
    }
    window.addEventListener('force-logout', handleForceLogout);
    return () => window.removeEventListener('force-logout', handleForceLogout);
  }, [navigate]);

  const PrivateRoute = ({ element }) => {
    return userId ? element : <Navigate to="/mobile-auth" />;
  };

  return (
    <>
      <RefreshHandler />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="wishlist"
            element={<PrivateRoute element={<Wishlist />} />}
          />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="mobile-auth" element={<MobileAuth />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="search" element={<QuerySearch />} />
          <Route path="product/:productId" element={<ProductDetails />} />
          <Route path="my" element={<AccountLayout />}>
            <Route index element={<PageNotFound />} />
            <Route
              path="dashboard"
              element={<PrivateRoute element={<Dashboard />} />}
            />
            <Route
              path="orders"
              element={<PrivateRoute element={<Orders />} />}
            />
            <Route
              path="profile"
              element={<PrivateRoute element={<Profile />} />}
            />
            <Route
              path="profile/edit"
              element={<PrivateRoute element={<ProfileEdit />} />}
            />
            <Route
              path="coupons"
              element={<PrivateRoute element={<Coupons />} />}
            />
            <Route
              path="addresses"
              element={<PrivateRoute element={<MyAddresses />} />}
            />
            <Route
              path="clothique-club"
              element={<PrivateRoute element={<Club />} />}
            />
          </Route>
          {/* <Route path=":query" element={<SearchedItem />} /> */}
        </Route>
        <Route path="checkout" element={<CartOrderLayout />}>
          <Route path="cart" element={<PrivateRoute element={<Cart />} />} />
          <Route
            path="address"
            element={<PrivateRoute element={<CheckoutAddress />} />}
          />
          <Route
            path="payment"
            element={<PrivateRoute element={<Payment />} />}
          />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
