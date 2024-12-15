import { Outlet } from "react-router";

export function Layout() {
  return (
    <>
      <h1>header</h1>
      <Outlet />
    </>
  );
}
