import DashboardAction from '../ui/dashboard/DashboardAction';

import DashBoardPersonalInfo from '../ui/dashboard/DashBoardPersonalInfo';
// import DashBoardActions from '../ui/DashBoardActions';

function Dashboard() {
  return (
    <div className="m-4 w-[680px]">
      <DashBoardPersonalInfo />
      <DashboardAction />
    </div>
  );
}

export default Dashboard;
