import type { NextPage } from 'next';

import { Affix } from '@/components/common/Affix';
import { PageTitle } from '@/components/common/PageTitle';
import { SectionCards } from '@/components/features/section/SectionCards';
import { BaseAuthLayout } from '@/components/layouts/BaseAuthLayout';
import { useSections } from '@/utils/hooks/api/useSections';
import Head from 'next/head';

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
            <div className="mt-12 flex flex-col gap-y-4">
              <SectionCards />
            </div>
          )}
        </div>
      </BaseAuthLayout>
      <Affix />
    </>
  );
};

export default SectionsPage;
