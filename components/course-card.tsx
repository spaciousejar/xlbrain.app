import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BookOpen } from 'lucide-react';

import { IconBadge } from '@/components/icon-badge';
import { formatPrice } from '@/lib/format';
import { CourseProgress } from '@/components/course-progress';

interface CourseCardProps {
  id: string;
  title: string;
  imageUrl: string;
  chaptersLength: number;
  price: number;
  progress: number | null;
  category: string;
}

const CourseCard = ({
  category,
  chaptersLength,
  id,
  imageUrl,
  price,
  progress,
  title,
}: CourseCardProps) => {
  return (
    <Link href={`/courses/${id}`}>
      <div className="h-full p-3 overflow-hidden transition border rounded-lg group hover:shadow-sm">
        <div className="relative w-full overflow-hidden rounded-md aspect-video">
          <Image fill className="object-cover" alt={title} src={imageUrl} />
        </div>
        <div className="flex flex-col pt-2">
          <div className="text-lg font-medium transition md:text-base group-hover:text-sky-700 line-clamp-2">
            {title}
          </div>
          <p className="text-xs text-muted-foreground">{category}</p>
          <div className="flex items-center my-3 text-sm gap-x-2 md:text-xs">
            <IconBadge size="sm" icon={BookOpen} />
            <span>
              {chaptersLength} {chaptersLength === 1 ? 'chapter' : 'chapters'}
            </span>
          </div>
          {progress !== null ? (
            <CourseProgress
              variant={progress === 100 ? 'success' : 'default'}
              size="sm"
              value={progress}
            />
          ) : (
            <p className="font-medium text-md md:text-sm text-slate-700">
              {formatPrice(price)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export { CourseCard };
