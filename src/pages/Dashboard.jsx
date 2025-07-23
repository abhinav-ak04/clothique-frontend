import { useUser } from '../contexts/UserContext';
import DashboardAction from '../ui/dashboard/DashboardAction';
import DashBoardPersonalInfo from '../ui/dashboard/DashBoardPersonalInfo';
import Loader from '../ui/shared/Loader';

function Dashboard() {
  const { loading } = useUser();

  if (loading) return <Loader />;

  return (
    <div className="m-4 w-[680px]">
      <DashBoardPersonalInfo />
      <DashboardAction />
    </div>
  );
}

export default Dashboard;
