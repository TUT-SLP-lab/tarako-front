import type { ReactNode } from 'react';

export const PageTitle = ({ children }: { children: ReactNode }) => {
  return <h1 className="mb-8 text-4xl font-bold">{children}</h1>;
};
