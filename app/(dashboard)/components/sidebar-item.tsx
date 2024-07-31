'use client';

import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useCallback } from 'react';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarItem: FC<SidebarItemProps> = ({ href, icon: Icon, label }) => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive =
    (pathname === '/' && href === '/') ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = useCallback(() => {
    router.push(href);
  }, [href, router]);

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        'flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20',
        isActive &&
          'text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700'
      )}
    >
      <div className="flex items-center py-4 gap-x-2">
        <Icon
          size={22}
          className={cn('text-slate-500', isActive && 'text-sky-700')}
        />
        {label}
      </div>
      <div
        className={cn(
          'ml-auto opacity-0 border-2 border-sky-700 h-full transition-all',
          isActive && 'opacity-100'
        )}
      />
    </button>
  );
};

export { SidebarItem };
