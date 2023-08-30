import type { LinkProps } from 'next/link';
import type { ReactNode } from 'react';

import clsx from 'clsx';
import Link from 'next/link';

type Props = LinkProps & {
  children: ReactNode;
  active: boolean;
};

export const PageLink = ({ href, children, active, ...rest }: Props) => {
  return (
    <Link
      href={href}
      {...rest}
      className={clsx([
        'font-md inline-block rounded px-4 py-2 transition duration-200 ease-in-out',
        active
          ? 'bg-pink-100 text-pink-700 hover:bg-pink-200'
          : 'text-gray-500 hover:bg-gray-100',
      ])}
    >
      {children}
    </Link>
  );
};
