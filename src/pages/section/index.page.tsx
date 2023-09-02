import type { NextPage } from 'next';

import { PageTitle } from '@/components/common/PageTitle';
import SeverityTrend from '@/components/common/SeverityTrend';
import TaskStatus from '@/components/common/TaskStatus';
import { BaseAuthLayout } from '@/components/layouts/BaseAuthLayout';
import { mockUsers } from '@/mocks/mockUsers';
import { Avatar } from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';

const mockChartDatas = [
  {
    date: '2023-01-01',
    users: { user1: 50, user2: 30, user3: 50, user4: 30, user5: 50, user6: 30 },
  },
  {
    date: '2023-01-02',
    users: { user1: 50, user2: 40, user3: 20, user4: 10, user5: 50, user6: 30 },
  },
  {
    date: '2023-01-03',
    users: { user1: 30, user2: 10, user3: 50, user4: 30, user5: 10, user6: 50 },
  },
  {
    date: '2023-01-04',
    users: { user1: 10, user2: 20, user3: 50, user4: 10, user5: 20, user6: 10 },
  },
  {
    date: '2023-01-05',
    users: { user1: 10, user2: 20, user3: 50, user4: 10, user5: 50, user6: 20 },
  },
];

const mockTaskDatas = [
  { name: 'user1', value: 5 },
  { name: 'user2', value: 5 },
  { name: 'user3', value: 5 },
  { name: 'user4', value: 5 },
  { name: 'user5', value: 5 },
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
              <SeverityTrend
                title="各メンバーの深刻度の推移"
                data={mockChartDatas}
              />
            </div>
            <div className="flex-1 rounded-lg border-2 border-gray-200">
              <TaskStatus
                title="各メンバーのタスクの進行数"
                data={mockTaskDatas}
              />
            </div>
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
