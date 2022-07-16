import Sider from "modules/Admin/Sider/Sider";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="grid grid-cols-5">
      <Sider />
      <div className="col-span-4 bg-slate-400">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
