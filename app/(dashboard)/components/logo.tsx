import Image from 'next/image';
import { FC } from 'react';

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return <Image height={130} width={130} src="/logo.svg" alt="logo" />;
};

export { Logo };
