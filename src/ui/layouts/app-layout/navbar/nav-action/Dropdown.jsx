import { useState } from 'react';
import { profileDropdown } from '../../../../../data/profile-dropdown';
import DropdownActions from './DropdownActions';
import { NavLink, useNavigate } from 'react-router-dom';

function Dropdown() {
  const [isLogin, setIsLogin] = useState(true);
  const { upper, lower, bottom } = profileDropdown;

  const navigate = useNavigate();
  function handleLoginButton() {
    navigate('/mobile-auth');
  }

  return (
    <div className="absolute top-full z-[999] flex w-72 flex-col gap-2 bg-white px-5 py-3 shadow-lg">
      {isLogin ? (
        <NavLink to="/my/profile">
          <div className="flex flex-col gap-[2px] border-b border-gray-200 py-2">
            <p className="text-[15px] font-bold text-gray-950">Hello X</p>
            <p className="text-[15px] font-medium text-gray-700">9898989898</p>
          </div>
        </NavLink>
      ) : (
        <div className="flex flex-col gap-[2px] border-b border-gray-200 py-2">
          <p className="text-[15px] font-bold text-gray-950">Welcome</p>
          <p className="text-[14px] font-medium text-gray-700">
            To access account and manage orders
          </p>
          <button
            className="text-core-theme hover:border-core-theme mt-2 w-35 rounded-md border border-gray-300 bg-white py-[6px] text-[15px] font-bold"
            onClick={handleLoginButton}
          >
            LOGIN / SIGNUP
          </button>
        </div>
      )}
      <DropdownActions isBottom={false} links={upper} />
      <DropdownActions isBottom={!isLogin} links={lower} />
      {isLogin && <DropdownActions isBottom={true} links={bottom} />}
    </div>
  );
}

export default Dropdown;
