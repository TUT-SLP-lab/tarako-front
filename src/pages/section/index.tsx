import type { NextPage } from 'next';

import { PageTitle } from '@/components/common/PageTitle';
import { BaseAuthLayout } from '@/components/layouts/BaseAuthLayout';
import { mockUsers } from '@/mocks/mockUsers';
import { Avatar } from '@mantine/core';
import Link from 'next/link';

const SectionPage: NextPage = () => {
  return (
    <BaseAuthLayout>
      <div className="mx-auto max-w-screen-lg p-8">
        <PageTitle>部署ページ</PageTitle>
        <div className="flex h-[280px] animate-pulse gap-4">
          <div className="flex-1 rounded-lg bg-gray-200" />
          <div className="flex-1 rounded-lg  bg-gray-200" />
          <div className="flex-1 rounded-lg bg-gray-200" />
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
  );
};

export default SectionPage;
