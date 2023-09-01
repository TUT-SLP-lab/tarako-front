import type { NextPage } from 'next';

import { TaskTimeline } from '@/components/features/task/TaskTimeline';
import { BaseAuthLayout } from '@/components/layouts/BaseAuthLayout';
import { useUser } from '@/utils/hooks/api/useUser';
import { Avatar } from '@mantine/core';
import Head from 'next/head';
import { useRouter } from 'next/router';

const UserDetailPage: NextPage = () => {
  const router = useRouter();
  const userId = router.query.userId as string;

  const { user, isLoading } = useUser({ userId });

  // TODO: ローディング中の表示を作る
  if (user === undefined || isLoading) {
    return (
      <BaseAuthLayout>
        <div className="md:animate-spin" />
      </BaseAuthLayout>
    );
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
              <p className="mt-1 text-lg">{user.section?.name}</p>
              <p className="text-lg">{user.email}</p>
              {/*
              TODO: ユーザーの自己紹介を表示する
              <p className="mt-4 text-lg">{user.description}</p>
               */}
            </div>
          </section>
          <TaskTimeline />
        </div>
      </BaseAuthLayout>
    </>
  );
};

export default UserDetailPage;
