import type { NextPage } from 'next';

import { DevelopmentAuthLayout } from '@/components/layouts/DevelopmentAuthLayout';
import Head from 'next/head';

const SettingsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>設定 - Tarako</title>
      </Head>
      <DevelopmentAuthLayout />
    </>
  );
};

export default SettingsPage;
