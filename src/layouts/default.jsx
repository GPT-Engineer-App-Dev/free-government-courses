import { Outlet } from "react-router-dom";
import { navItems } from "../App";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center space-x-4">
          <img src="https://placehold.co/40x40" alt="logo" className="h-10 w-10" />
          <span className="text-xl font-bold">Free Courses</span>
        </div>
        <nav className="flex space-x-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "transition-colors",
                  isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
                )
              }
            >
              {item.icon}
              <span className="ml-2">{item.title}</span>
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="flex-grow p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;