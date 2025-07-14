import { Outlet } from 'react-router-dom';
import { userData } from '../../data/sample-user';
import Sidebar from './account-layout/Sidebar';

function AccountLayout() {
  return (
    <>
      <div className="mt-[50px] h-full w-full">
        <div className="mx-auto h-full w-[980px]">
          <div className="w-full border-b-1 border-zinc-300 py-4">
            <h1 className="text-lg font-[650]">Account</h1>
            <p className="text-sm">{userData.name}</p>
          </div>
          <div className="flex">
            <Sidebar />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountLayout;
