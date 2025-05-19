import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import DrawerMenu from "../components/drawer";

export const Route = createRootRoute({
  component: () => (
    <>
      <DrawerMenu />
      <Outlet />
    </>
  ),
  notFoundComponent: () => <div>quaoa</div>,
});
