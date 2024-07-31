'use client';

import { FC, useMemo } from 'react';
import dynamic from 'next/dynamic';

import 'react-quill/dist/quill.bubble.css';

interface PreviewProps {
  value: string;
}

const Preview: FC<PreviewProps> = ({ value }) => {
  const ReactQuill = useMemo(
    () =>
      dynamic(() => import('react-quill'), {
        ssr: false,
      }),
    []
  );

  return <ReactQuill theme="bubble" value={value} readOnly />;
};

export { Preview };
