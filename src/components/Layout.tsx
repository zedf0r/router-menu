import { Outlet } from "react-router-dom";
import { Menu } from "./Menu";

export const Layout = () => {
  return (
    <>
      <Menu />
      <div className="page">
        <Outlet />
      </div>
    </>
  );
};
