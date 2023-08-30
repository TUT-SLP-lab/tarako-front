import { Header } from './Header';
import Link from 'next/link';

export const DevelopmentLayout = () => {
  return (
    <>
      <Header />
      <main className="mt-header flex flex-col items-center justify-center gap-12 pt-80">
        <h1 className="text-4xl font-bold">開発中</h1>
        <Link
          href="/"
          className="rounded-2xl bg-pink-500 px-8 py-6 text-2xl font-bold text-white hover:bg-pink-600"
        >
          トップページに戻る
        </Link>
      </main>
    </>
  );
};
