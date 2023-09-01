import type { NextPage } from 'next';

import { DevelopmentLayout } from '@/components/layouts/DevelopmentLayout';
import Head from 'next/head';

const SettingsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>設定 - Tarako</title>
      </Head>
      <DevelopmentLayout />
    </>
  );
};

export default SettingsPage;
