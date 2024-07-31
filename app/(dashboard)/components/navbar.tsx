import { NavbarRoutes } from '@/components/navbar-routes';
import { MobileSidebar } from './mobile-sidebar';

const Navbar = () => {
  return (
    <div className="flex items-center h-full p-4 bg-white border-b shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export { Navbar };
