'use client';

import { Category } from '@prisma/client';
import React, { FC } from 'react';
import {
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode,
} from 'react-icons/fc';
import { IconType } from 'react-icons';

import { CategoryItem } from './category-item';

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category['name'], IconType> = {
  Music: FcMusic,
  Photography: FcOldTimeCamera,
  Fitness: FcSportsMode,
  Accounting: FcSalesPerformance,
  'Computer Science': FcMultipleDevices,
  Filming: FcFilmReel,
  Engineering: FcEngineering,
};

const Categories: FC<CategoriesProps> = ({ items }) => {
  return (
    <div className="flex items-center pb-2 overflow-x-auto gap-x-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};

export { Categories };
