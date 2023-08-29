import type { ReactNode } from 'react';

import { Header } from './Header';

export const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="mt-[100px]">{children}</main>
    </>
  );
};
