import type { NextPage } from 'next';

import { PageTitle } from '@/components/common/PageTitle';
import { BaseAuthLayout } from '@/components/layouts/BaseAuthLayout';

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
      </div>
    </BaseAuthLayout>
  );
};

export default SectionPage;
