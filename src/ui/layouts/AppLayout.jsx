import { Outlet } from 'react-router-dom';
import Header from './app-layout/navbar/Header';

function AppLayout() {
  return (
    <div>
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
