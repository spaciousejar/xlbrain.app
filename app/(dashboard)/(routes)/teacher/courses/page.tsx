import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { DataTable } from './components/data-table';
import { columns } from './components/columns';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';

async function getData(): Promise<any[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    // ...
  ];
}

const CoursesPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }
  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="p-6">
      {/* <Link href="/teacher/create">
        <Button>New Course</Button> */}
      <DataTable columns={columns} data={courses} />
      {/* </Link> */}
    </div>
  );
};

export default CoursesPage;
