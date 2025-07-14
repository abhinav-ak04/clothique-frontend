import { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { HiOutlineUser } from 'react-icons/hi';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import Dropdown from './nav-action/Dropdown';
import NavActionItems from './nav-action/NavActionsItems';
import { NavLink } from 'react-router-dom';

function NavAccount() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="mx-2 flex min-w-48 justify-around">
      <div
        className="relative"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <NavActionItems description="Profile">
          <HiOutlineUser
            className="text-[20px] text-gray-800"
            strokeWidth={1.4}
          />
          {showDropdown && <Dropdown />}
        </NavActionItems>
      </div>
      <NavLink to="/wishlist">
        <NavActionItems description="Wishlist" to="/wishlist">
          <CiHeart className="text-[20px] text-gray-800" strokeWidth={0.5} />
        </NavActionItems>
      </NavLink>
      <NavLink to="/checkout/cart">
        <NavActionItems description="Bag" to="/checkout/cart">
          <HiOutlineShoppingBag
            className="text-[20px] text-gray-800"
            strokeWidth={1.5}
          />
        </NavActionItems>
      </NavLink>
    </div>
  );
}

export default NavAccount;
