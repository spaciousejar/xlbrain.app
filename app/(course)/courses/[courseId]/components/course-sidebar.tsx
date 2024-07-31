import { Chapter, Course, UserProgress } from '@prisma/client';
import { redirect } from 'next/navigation';

import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { CourseProgress } from '@/components/course-progress';
import { CourseSidebarItem } from './course-sidebar-item';

interface CourseSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}

const CourseSidebar = async ({ course, progressCount }: CourseSidebarProps) => {
  const { userId } = auth();
  if (!userId) {
    return redirect('/');
  }

  const purchase = await db.purchase.findUnique({
    where: {
      userId_courseId: {
        userId,
        courseId: course.id,
      },
    },
  });

  return (
    <div className="flex flex-col h-full overflow-y-auto border-r shadow-sm">
      <div className="flex flex-col p-8 border-b">
        <h1 className="font-semibold">{course.title}</h1>
        {purchase && (
          <div className="mt-10">
            <CourseProgress variant="success" value={progressCount} />
          </div>
        )}
      </div>
      <div className="flex flex-col w-full">
        {course.chapters.map((item) => (
          <CourseSidebarItem
            key={item.id}
            id={item.id}
            label={item.title}
            isCompleted={!!item.userProgress?.[0]?.isCompleted}
            courseId={course.id}
            isLocked={!item.isFree && !purchase}
          />
        ))}
      </div>
    </div>
  );
};

export { CourseSidebar };
