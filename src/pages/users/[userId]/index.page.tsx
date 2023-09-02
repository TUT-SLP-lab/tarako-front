import type { NextPage } from 'next';

import SeverityTrend from '@/components/common/SeverityTrend';
import TaskStatus from '@/components/common/TaskStatus';
import { TaskTimeline } from '@/components/features/task/TaskTimeline';
import { BaseAuthLayout } from '@/components/layouts/BaseAuthLayout';
import { mockUsers } from '@/mocks/mockUsers';
import { Avatar } from '@mantine/core';
import Head from 'next/head';
import { useRouter } from 'next/router';

const mockChartDatas = [
  { date: '2023-01-01', users: { user1: 50 } },
  { date: '2023-01-02', users: { user1: 50 } },
  { date: '2023-01-03', users: { user1: 30 } },
  { date: '2023-01-04', users: { user1: 10 } },
  { date: '2023-01-05', users: { user1: 10 } },
];

const mockTaskDatas = [
  { name: 'Progress', value: 5 },
  { name: 'Done', value: 5 },
];

const UserDetailPage: NextPage = () => {
  const router = useRouter();
  const userId = router.query.userId as string;

  const user = mockUsers.find((user) => user.id === userId);

  if (user === undefined) {
    router.push('/404').catch((err) => {
      // TODO: Error handling
      console.log(err);
    });
    return null;
  }

  return (
    <>
      <Head>
        <title>{user.name}のプロフィール - Tarako</title>
      </Head>
      <BaseAuthLayout>
        <div className="mx-auto max-w-screen-lg space-y-12 p-8">
          <section className="flex items-center justify-center gap-16">
            <Avatar src={user.icon} size={320} />
            <div>
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="mt-1 text-lg">{user.section}</p>
              <p className="text-lg">{user.email}</p>
              <p className="mt-4 text-lg">{user.description}</p>
            </div>
          </section>
          <div className="flex h-[280px] gap-4">
            <div className="flex-1 rounded-lg border-2 border-gray-200">
              <SeverityTrend title="深刻度の推移" data={mockChartDatas} />
            </div>
            <div className="flex-1 rounded-lg border-2 border-gray-200">
              <TaskStatus title="タスクの状態" data={mockTaskDatas} />
            </div>
          </div>
          <TaskTimeline />
        </div>
      </BaseAuthLayout>
    </>
  );
};

export default UserDetailPage;
