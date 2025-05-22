import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import DrawerMenu from "../components/drawer";
import { ThemeProvider } from "@/components/theme-provider";

export const Route = createRootRoute({
  component: () => {
    const location = useLocation();
    const isLogin = location.pathname === "/login";
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {isLogin ? (
          <Outlet />
        ) : (
          <>
            <DrawerMenu />
            <div className="w-full h-dvh flex pt-30">
              <Outlet />
            </div>
          </>
        )}
      </ThemeProvider>
    );
  },
  notFoundComponent: () => <div>quaoa</div>,
});
