import type { NextPage } from 'next';

import { TaskTimeline } from '@/components/features/task/TaskTimeline';
import { BaseAuthLayout } from '@/components/layouts/BaseAuthLayout';
import { mockUsers } from '@/mocks/mockUsers';
import { Avatar } from '@mantine/core';
import Head from 'next/head';
import { useRouter } from 'next/router';

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
          <TaskTimeline />
        </div>
      </BaseAuthLayout>
    </>
  );
};

export default UserDetailPage;
