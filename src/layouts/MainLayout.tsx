import { Outlet } from "react-router-dom";
import { MainNavbar } from "./Navbar";

const MainLayout = () => {
  return (
    <div>
      <MainNavbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
