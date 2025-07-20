import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Cart from './pages/Cart';
import CheckoutAddress from './pages/CheckoutAddress';
import Club from './pages/Club';
import ContactUs from './pages/ContactUs';
import Coupons from './pages/Coupons';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import MobileAuth from './pages/MobileAuth';
import MyAddresses from './pages/MyAddresses';
import Orders from './pages/Orders';
import PageNotFound from './pages/PageNotFound';
import Payment from './pages/Payment';
import ProductDetails from './pages/ProductDetails';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import QuerySearch from './pages/QuerySearch';
import Wishlist from './pages/Wishlist';
import AccountLayout from './ui/layouts/AccountLayout';
import AppLayout from './ui/layouts/AppLayout';
import CartOrderLayout from './ui/layouts/CartOrderLayout';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="mobile-auth" element={<MobileAuth />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="search" element={<QuerySearch />} />
          <Route path="product/:productId" element={<ProductDetails />} />
          <Route path="my" element={<AccountLayout />}>
            <Route index element={<PageNotFound />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/edit" element={<ProfileEdit />} />
            <Route path="coupons" element={<Coupons />} />
            <Route path="addresses" element={<MyAddresses />} />
            <Route path="clothique-club" element={<Club />} />
          </Route>
          {/* <Route path=":query" element={<SearchedItem />} /> */}
        </Route>
        <Route path="checkout" element={<CartOrderLayout />}>
          <Route path="cart" element={<Cart />} />
          <Route path="address" element={<CheckoutAddress />} />
          <Route path="payment" element={<Payment />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
