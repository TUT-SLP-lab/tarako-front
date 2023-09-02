import type { NextPage } from 'next';

import { PageTitle } from '@/components/common/PageTitle';
import SeverityTrend from '@/components/common/SeverityTrend';
import { BaseAuthLayout } from '@/components/layouts/BaseAuthLayout';
import { mockUsers } from '@/mocks/mockUsers';
import { Avatar } from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';

const mockData = [
  { date: '2023-01-01', users: { user1: 50, user2: 30 } },
  { date: '2023-01-02', users: { user1: 50, user2: 40 } },
  { date: '2023-01-03', users: { user1: 30, user2: 10 } },
  { date: '2023-01-04', users: { user1: 10, user2: 20 } },
  { date: '2023-01-05', users: { user1: 10, user2: 20 } },
];

const SectionPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>部署 - Tarako</title>
      </Head>
      <BaseAuthLayout>
        <div className="mx-auto max-w-screen-lg p-8">
          <PageTitle>部署ページ</PageTitle>
          <div className="flex h-[280px] gap-4">
            <div className="flex-1 rounded-lg border-2 border-gray-200">
              <SeverityTrend data={mockData} />
            </div>
            <div className="flex-1 rounded-lg border-2 border-gray-200" />
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-bold">メンバー状況</h3>
            <div className="mt-4 flex gap-4">
              {mockUsers.map((user) => {
                return (
                  <Link
                    key={user.id}
                    href={`/users/${user.id}`}
                    className="flex flex-1 items-center justify-center gap-8 rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-100"
                  >
                    <Avatar src={user.icon} size={96} />
                    <div>
                      <p className="text-xl font-bold">{user.name}</p>
                      <p className="mt-2 text-xs text-light">{user.section}</p>
                      <p className="text-xs text-light">{user.email}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </BaseAuthLayout>
    </>
  );
};

export default SectionPage;
