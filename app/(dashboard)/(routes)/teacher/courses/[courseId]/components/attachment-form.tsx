'use client';

import { Attachment, Course } from '@prisma/client';
import axios from 'axios';
import { File, ImageIcon, Loader2, PlusCircle, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import toast from 'react-hot-toast';
import * as z from 'zod';

import { FileUpload } from '@/components/file-upload';
import { Button } from '@/components/ui/button';

interface AttachmentFormProps {
  initialData: Course & {
    attachments: Attachment[];
  };
  courseId: string;
}

const formSchema = z.object({
  url: z.string().min(1),
});

const AttachmentForm: FC<AttachmentFormProps> = ({ courseId, initialData }) => {
  const router = useRouter();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const toggleEdit = () => setIsEditing((prev) => !prev);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post(`/api/courses/${courseId}/attachments`, values);
      toast.success('Course updated');
      toggleEdit();
      router.refresh();
    } catch {
      toast.error('Something went wrong');
    }
  };

  const onDelete = async (id: string) => {
    try {
      setDeletingId(id);
      await axios.delete(`/api/courses/${courseId}/attachments/${id}`);
      toast.success('Attachment deleted');
      router.refresh();
    } catch {
      toast.error('Something went wrong');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="p-4 mt-6 border rounded-md bg-slate-100">
      <div className="flex items-center justify-between font-medium">
        Course attachments
        <Button variant="ghost" type="button" onClick={toggleEdit}>
          {isEditing ? (
            'Cancel'
          ) : (
            <>
              <PlusCircle className="w-4 h-4 mr-2" />
              Add an file
            </>
          )}
        </Button>
      </div>
      {isEditing ? (
        <div>
          <FileUpload
            endpoint="courseAttachment"
            onChange={(url) => {
              if (url) {
                onSubmit({ url });
              }
            }}
          />
          <div className="mt-4 text-xs text-muted-foreground">
            Add a file to your course. The file will be available to download
          </div>
        </div>
      ) : !initialData.imageUrl ? (
        <div className="flex items-center justify-center rounded-md h-60 bg-slate-200">
          <ImageIcon className="w-10 h-10 text-slate-500" />
        </div>
      ) : (
        <>
          {initialData.attachments.length === 0 ? (
            <p className="mt-2 text-sm italic text-slate-400">
              No attachments yet.
            </p>
          ) : (
            <div className="space-y-3">
              {initialData.attachments.map((attachment) => (
                <div
                  key={attachment.id}
                  className="flex items-center w-full p-3 border rounded-sm border-sky-200 text-sky-700"
                >
                  <File className="flex-shrink-0 w-4 h-4 mr-2" />
                  <p className="text-xs line-clamp-1">{attachment.name}</p>
                  {deletingId === attachment.id ? (
                    <div>
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </div>
                  ) : (
                    <button
                      onClick={() => onDelete(attachment.id)}
                      className="ml-auto transition hover:opacity-75"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export { AttachmentForm };
