import { Loader2 } from 'lucide-react';
import React from 'react';

interface LoadingProps {
  size?: number;
  color?: string;
}

const Loading = ({ color = '#fff', size = 20 }: LoadingProps) => {
  return <Loader2 className="mr-1 animate-spin" size={size} color={color} />;
};

export { Loading };
