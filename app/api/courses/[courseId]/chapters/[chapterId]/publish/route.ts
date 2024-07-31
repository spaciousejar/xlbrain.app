import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const courseOwner = await db.course.findUnique({
      where: { id: params.courseId, userId },
    });

    if (!courseOwner) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const chapter = await db.chapter.findUnique({
      where: { id: params.chapterId, courseId: params.courseId },
    });

    if (!chapter) {
      return new NextResponse('Not Found', { status: 404 });
    }
    const muxData = await db.muxData.findUnique({
      where: {
        chapterId: params.chapterId,
      },
    });

    if (
      !chapter ||
      !muxData ||
      !chapter.title ||
      !chapter.description ||
      !chapter.videoUrl
    ) {
      return new NextResponse('Missing required fields', { status: 400 });
    }

    const updatedChapter = await db.chapter.update({
      where: { id: params.chapterId, courseId: params.courseId },
      data: { isPublished: true },
    });

    return NextResponse.json(updatedChapter);
  } catch (error) {
    console.log('[CHAPTER_PUBLISH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
