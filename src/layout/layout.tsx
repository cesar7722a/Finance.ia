import { Hearder } from "@/components/hearder";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <>
      <Hearder />
      <div className="h-px bg-white/10" />
      <Outlet />
    </>
  );
}
