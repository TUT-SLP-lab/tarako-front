import { TaskTimeline } from '@/components/features/task/TaskTimeline';
import { Button } from '@mantine/core';
import { useState } from 'react';

export const DashBoardView = () => {
  const [shouldShowDummyDiary, setShouldShowDummyDiary] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const onClickCrateDiaryButton = async () => {
    setButtonLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShouldShowDummyDiary(true);
    setButtonLoading(false);
  };

  return (
    <div className="mx-auto max-w-screen-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Today</h2>
        {!shouldShowDummyDiary && (
          <Button
            size="lg"
            variant="outline"
            color="pink"
            onClick={() => {
              onClickCrateDiaryButton().catch((e) => {
                // TODO: Error handling
                console.error(e);
              });
              return;
            }}
            loading={buttonLoading}
          >
            日報を作成する
          </Button>
        )}
      </div>
      {shouldShowDummyDiary && (
        <div className="mt-4">
          <DummyDiary />
        </div>
      )}
      <div className="mt-8">
        <TaskTimeline />
      </div>
    </div>
  );
};

const DummyDiary = () => {
  return (
    <div className="rounded-md border border-gray-200 p-4">
      <h3 className="text-lg font-bold">日報</h3>
      <div className="mt-2 space-y-4">
        <div>
          <h4 className="text-sm font-bold">タイムライン</h4>
          <p className="word-break-break-all whitespace-pre-line break-words text-sm">{`10:00~12:00 メール確認やチャット確認、先方とのMTG
  13:00~15:00 株式会社○○様の経理業務
  15:00~17:00 株式会社△△様の経理業務`}</p>
        </div>
        <div>
          <h4 className="mt-2 text-sm font-bold">AI分析</h4>
          <p className="word-break-break-all whitespace-pre-line break-words text-sm">
            {`文を書いた人は、通常の生活リズムとは異なる状況で一日を開始したことを示しています。具体的には、朝の起床時間が遅れたことで、その日の仕事のリズムが通常とは異なったものとなったようです。当初、この変化が仕事のパフォーマンスに大きな影響を及ぼすとは考えていなかったようですが、実際にはタスクの達成量が普段よりも少なくなってしまったことから、生活リズムの変化が仕事の効率やパフォーマンスに影響を及ぼすことを実感したようです。この経験を通じて、彼/彼女は生活リズムの重要性を再認識し、翌日は通常のリズムを取り戻すことを決意しています。この文から、文を書いた人が自分の生活リズムや仕事のパフォーマンスに対する意識が高いこと、そして自己反省や自己改善の意識も持っていることが読み取れます。`}
          </p>
        </div>
      </div>
    </div>
  );
};
