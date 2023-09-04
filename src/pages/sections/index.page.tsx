import type { NextPage } from 'next';

import { Affix } from '@/components/common/Affix';
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
          {sections && (
            <section className="mt-12 flex flex-col gap-y-4">
              <div className="grid grid-cols-2 gap-4">
                {sections.map((section) => {
                  return (
                    <Link
                      key={section.section_id}
                      href={`/sections/${section.section_id}`}
                      className="flex flex-1 items-center justify-center gap-8 rounded-lg border border-gray-200 px-4 py-16 transition-colors hover:bg-gray-100"
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
      </BaseAuthLayout>
      <Affix />
    </>
  );
};

export default SectionsPage;
