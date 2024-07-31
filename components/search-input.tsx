'use client';

import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import qs from 'query-string';

import { Input } from '@/components/ui/input';

import { useDebounce } from '@/hooks/use-debounce';

const SearchInput = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value);

  const currentCategoryId = searchParams.get('categoryId');

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          categoryId: currentCategoryId,
          title: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debouncedValue, currentCategoryId, router, pathname]);

  return (
    <div className="relative">
      <Search className="absolute w-4 h-4 top-3 left-3 text-slate-600" />
      <Input
        className="w-full md:w-[300px] pl-9 rounded-full focus-visible:ring-slate-200 bg-slate-100"
        placeholder="Search for courses..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};

export { SearchInput };
