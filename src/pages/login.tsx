import type { NextPage } from 'next';

import { Button } from '@mantine/core';
import Image from 'next/image';

const LoginPage: NextPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-b from-white via-blue-100 to-blue-300 px-4">
      <div>
        <div className="flex items-center justify-between gap-8">
          <div>
            <div className="space-y-8">
              <h1 className="bg-gradient-to-r from-pink-400 to-pink-900 bg-clip-text text-6xl font-bold text-transparent">
                Tarako
              </h1>
              <div className="space-y-1 text-4xl font-bold">
                <p>個人作業が多い組織のための</p>
                <p>情報可視化ツール</p>
              </div>
              <div className="space-y-1 text-xl text-light">
                <p>
                  個人作業が多い組織は、誰が何をしているのかが見えにくいです。
                </p>
                <p>
                  Tarakoは個人の作業を可視化することで、組織の情報を可視化します。
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/logo.png"
            alt="Tarako"
            width={250}
            height={250}
            className="flex-shrink-0"
          />
        </div>
        <div className="mt-12">
          <p className="text-2xl font-bold">アプリを体験する</p>
          <div className="mt-4 flex gap-x-4 text-white">
            <Button size="lg">事務員1</Button>
            <Button size="lg">事務員2</Button>
            <Button size="lg">上司</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
