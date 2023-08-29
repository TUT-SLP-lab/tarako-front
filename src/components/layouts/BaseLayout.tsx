import type { ReactNode } from 'react';

import { Header } from './Header';

export const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="mt-header">{children}</main>
    </>
  );
};
