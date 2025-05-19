import { useState } from "react";
import { ChartSpline, LogOut, Menu, X, type LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function DrawerMenu() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function close() {
    setIsDrawerOpen(false);
  }

  return (
    <>
      {/* Button to open drawer */}
      <div className="absolute left-7 top-7">
        <button
          type="button"
          onClick={() => setIsDrawerOpen(true)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          <Menu className=" text-white-500 dark:text-white-400" size={23} />
        </button>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-hidden transition-transform bg-white w-64 dark:bg-gray-800 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
            Menu
          </h5>
          <button type="button" onClick={() => setIsDrawerOpen(false)}>
            <div className="w-8 h-8 rounded-full flex cursor-pointer items-center justify-center">
              <X className=" text-gray-500 dark:text-gray-400" size={18} />
            </div>
          </button>
        </div>
        {/* Menu Items */}
        <div className="py-4 h-full">
          <ul className="h-full flex flex-col justify-between font-medium">
            <div className="space-y-2  h-full flex flex-col">
              <DrawerItem
                label="Dashboard"
                close={close}
                to="/dashboard"
                Icon={ChartSpline}
              />
              <DrawerItem
                label="Stock"
                close={close}
                to="/stock"
                Icon={ChartSpline}
              />
            </div>
            <DrawerItem label="Log out" close={close} to="/" Icon={LogOut} />
          </ul>
        </div>
      </div>
    </>
  );
}

// Components
interface IDrawerItem {
  label: string;
  Icon: LucideIcon;
  to: string;
  close: () => void;
}

function DrawerItem({ label, Icon, to, close }: IDrawerItem) {
  return (
    <li>
      <Link
        onClick={close}
        to={to}
        className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group dark:text-fuchsia-600"
      >
        <span className="shrink-0 w-5 h-5 rounded-sm mr-3">
          <Icon />{" "}
        </span>
        <span className="flex-1 ms-3 whitespace-nowrap">{label}</span>
      </Link>
    </li>
  );
}
