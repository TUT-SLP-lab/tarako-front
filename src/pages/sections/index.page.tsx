import type { NextPage } from 'next';

import { PageTitle } from '@/components/common/PageTitle';
import { BaseAuthLayout } from '@/components/layouts/BaseAuthLayout';
import { useSections } from '@/utils/hooks/api/useSections';
import { Avatar } from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';

const SectionsPage: NextPage = () => {
  const { sections } = useSections();

  return (
    <>
      <Head>
        <title>部署一覧 - Tarako</title>
      </Head>
      <BaseAuthLayout>
        <div className="mx-auto max-w-screen-lg p-8">
          <PageTitle>部署一覧</PageTitle>
          <div className="mt-8 flex flex-col gap-y-4">
            {sections && (
              <section className="mt-12">
                <h2 className="text-2xl font-bold">部署一覧</h2>
                <div className="mt-4 grid h-36 grid-cols-2 gap-4">
                  {sections.map((section) => {
                    return (
                      <Link
                        key={section.section_id}
                        href={`/sections/${section.section_id}`}
                        className="flex flex-1 items-center justify-center gap-8 rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-100"
                      >
                        <Avatar
                          src={`/section_images/${section.icon}.png`}
                          size={96}
                        />
                        <div>
                          <p className="text-xl font-bold">{section.name}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
        </div>
      </BaseAuthLayout>
    </>
  );
};

export default SectionsPage;
