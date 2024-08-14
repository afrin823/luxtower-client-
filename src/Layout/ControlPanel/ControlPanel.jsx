import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../Components/Dashboard/DashboardNavbar";


function ControlPanel() {
  return (
    <div className="flex h-20 lg:h-screen bg-gray-100">
      <DashboardNavbar />
      <div className="flex-1 lg:ml-64 p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default ControlPanel;
