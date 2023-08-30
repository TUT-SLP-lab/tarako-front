import { Header } from './Header';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect, type ReactNode } from 'react';

export const BaseLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      router.push('/login').catch((err) => {
        // TODO: Error handling
        throw err;
      });
    }
  }, [isAuth, router]);

  return (
    <>
      <Header />
      <main className="mt-header">{children}</main>
    </>
  );
};
