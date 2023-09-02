import type { NextPage } from 'next';

import { DevelopmentAuthLayout } from '@/components/layouts/DevelopmentAuthLayout';
import Head from 'next/head';

const HelpPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ヘルプ - Tarako</title>
      </Head>
      <DevelopmentAuthLayout />
    </>
  );
};

export default HelpPage;
