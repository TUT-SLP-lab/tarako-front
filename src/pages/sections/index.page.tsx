import type { NextPage } from 'next';

import { PageTitle } from '@/components/common/PageTitle';
import { BaseAuthLayout } from '@/components/layouts/BaseAuthLayout';
import Head from 'next/head';

const SectionsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>部署一覧 - Tarako</title>
      </Head>
      <BaseAuthLayout>
        <div className="mx-auto max-w-screen-lg p-8">
          <PageTitle>部署一覧</PageTitle>
          <div className="mt-8 flex flex-col gap-y-4">
            {[1, 2, 3, 4, 5].map((i) => {
              return (
                <div key={i} className="flex h-[280px] animate-pulse gap-x-4">
                  <div className="flex-1 rounded-lg bg-gray-200" />
                  <div className="flex-1 rounded-lg  bg-gray-200" />
                  <div className="flex-1 rounded-lg bg-gray-200" />
                </div>
              );
            })}
          </div>
        </div>
      </BaseAuthLayout>
    </>
  );
};

export default SectionsPage;
