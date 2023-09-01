import type { NextPage } from 'next';

import { PageTitle } from '@/components/common/PageTitle';
import { BaseAuthLayout } from '@/components/layouts/BaseAuthLayout';
import { useSection } from '@/utils/hooks/api/useSection';
import { useSections } from '@/utils/hooks/api/useSections';
import { useUsers } from '@/utils/hooks/api/useUsers';
import { Avatar } from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SectionDetailPage: NextPage = () => {
  const router = useRouter();
  const sectionId = router.query.sectionId as string;

  const { users, isLoading } = useUsers();
  const { section } = useSection({ sectionId });
  const { sections } = useSections();

  if (users === undefined || section === undefined || isLoading) {
    return (
      <BaseAuthLayout>
        <div className="md:animate-spin" />
      </BaseAuthLayout>
    );
  }

  return (
    <>
      <Head>
        <title>{section.name} - Tarako</title>
      </Head>
      <BaseAuthLayout>
        <div className="mx-auto max-w-screen-lg p-8">
          <PageTitle>{section.name}</PageTitle>
          <div className="mt-8 flex h-[280px] animate-pulse gap-4">
            <div className="flex-1 rounded-lg bg-gray-200" />
            <div className="flex-1 rounded-lg  bg-gray-200" />
            <div className="flex-1 rounded-lg bg-gray-200" />
          </div>
          <section className="mt-12">
            <h2 className="text-2xl font-bold">メンバー状況</h2>
            <div className="mt-4 flex gap-4">
              {users
                ? users.map((user) => {
                    return (
                      <Link
                        key={user.user_id}
                        href={`/users/${user.user_id}`}
                        className="flex flex-1 items-center justify-center gap-8 rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-100"
                      >
                        <Avatar src={user.icon} size={96} />
                        <div>
                          <p className="text-xl font-bold">{user.name}</p>
                          <p className="mt-2 text-xs text-light">
                            {user.section?.name}
                          </p>
                          <p className="text-xs text-light">{user.email}</p>
                        </div>
                      </Link>
                    );
                  })
                : null}
            </div>
          </section>
          {sections && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold">部署一覧</h2>
              <div className="mt-4 flex h-36 gap-4">
                {sections.map((section) => {
                  return (
                    <Link
                      key={section.section_id}
                      href={`/sections/${section.section_id}`}
                      className="flex flex-1 items-center justify-center gap-8 rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-100"
                    >
                      <div>
                        <p className="text-xl font-bold">{section.name}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <Link
                href="/sections"
                className="text-md mt-4 block w-fit text-light underline"
              >
                全ての部署を見る
              </Link>
            </section>
          )}
        </div>
      </BaseAuthLayout>
    </>
  );
};

export default SectionDetailPage;
