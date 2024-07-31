'use client';

import MuxPlayer from '@mux/mux-player-react';
import { Chapter, MuxData } from '@prisma/client';
import axios from 'axios';
import { Pencil, PlusCircle, Video } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import toast from 'react-hot-toast';
import * as z from 'zod';

import { FileUpload } from '@/components/file-upload';
import { Button } from '@/components/ui/button';

interface ChapterVideoFormProps {
  initialData: Chapter & { muxData?: MuxData | null };
  courseId: string;
  chapterId: string;
}

const formSchema = z.object({
  videoUrl: z.string().min(1),
});

const ChapterVideoForm: FC<ChapterVideoFormProps> = ({
  courseId,
  initialData,
  chapterId,
}) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const toggleEdit = () => setIsEditing((prev) => !prev);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(
        `/api/courses/${courseId}/chapters/${chapterId}`,
        values
      );
      toast.success('Chapter updated');
      toggleEdit();
      router.refresh();
    } catch {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="p-4 mt-6 border rounded-md bg-slate-100">
      <div className="flex items-center justify-between font-medium">
        Course video
        <Button variant="ghost" type="button" onClick={toggleEdit}>
          {isEditing ? (
            'Cancel'
          ) : !initialData.videoUrl ? (
            <>
              <PlusCircle className="w-4 h-4 mr-2" />
              Add an video
            </>
          ) : (
            <>
              <Pencil className="w-4 h-4 mr-2" />
              Edit video
            </>
          )}
        </Button>
      </div>
      {isEditing ? (
        <div>
          <FileUpload
            endpoint="chapterVideo"
            onChange={(url) => {
              if (url) {
                onSubmit({ videoUrl: url });
              }
            }}
          />
          <div className="mt-4 text-xs text-muted-foreground">
            Upload this chapter&apos;s video.
          </div>
        </div>
      ) : !initialData.videoUrl ? (
        <div className="flex items-center justify-center rounded-md h-60 bg-slate-200">
          <Video className="w-10 h-10 text-slate-500" />
        </div>
      ) : (
        <>
          <div className="relative mt-2 aspect-video">
            <MuxPlayer playbackId={initialData?.muxData?.playbackId || ''} />
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            Videos can take a few minutes to process. Refresh the page if video
            does not appear.
          </div>
        </>
      )}
    </div>
  );
};

export { ChapterVideoForm };
