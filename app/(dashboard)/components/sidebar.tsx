import { FC } from 'react';

import { Logo } from './logo';
import { SidebarRoutes } from './sidebar-routes';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className="flex flex-col h-full overflow-y-auto bg-white border-r shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export { Sidebar };
