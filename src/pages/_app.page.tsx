import '@/styles/globals.css';
import 'destyle.css';
import type { AppProps } from 'next/app';

import { MantineProvider } from '@mantine/core';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import Head from 'next/head';

dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.tz.setDefault('Asia/Tokyo');

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tarako</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
