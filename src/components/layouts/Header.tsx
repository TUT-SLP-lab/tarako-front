import { Avatar } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-header items-center justify-between border-b border-gray-200 bg-white px-8">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Tarako"
          width={64}
          height={64}
          className="cursor-pointer"
        />
      </Link>
      <div className="pr-4">
        <Avatar radius="xl" />
      </div>
    </header>
  );
};
