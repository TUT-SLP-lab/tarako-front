import { TaskTimeline } from '@/components/features/task/TaskTimeline';
import { ActionIcon, Button, Modal } from '@mantine/core';
import {
  IconMicrophone,
  IconMoodAngry,
  IconMoodHappy,
  IconRun,
} from '@tabler/icons-react';
import { IconCheck, IconEdit, IconStar } from '@tabler/icons-react';
import { useState } from 'react';

export const DashBoardView = () => {
  const [shouldShowDummyDiary, setShouldShowDummyDiary] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const [modalOpened, setModalOpened] = useState(false);

  const onClickRecordingButton = async () => {
    setModalOpened(false);
    setButtonLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShouldShowDummyDiary(true);
    setButtonLoading(false);
  };

  return (
    <>
      <div className="mx-auto max-w-screen-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Today</h2>
          {!shouldShowDummyDiary && (
            <Button
              size="lg"
              variant="outline"
              color="pink"
              onClick={() => {
                // void onClickCrateDiaryButton();
                setModalOpened(true);
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
      <Modal
        opened={modalOpened}
        onClose={() => {
          setModalOpened(false);
        }}
        size="xl"
        closeOnClickOutside={false}
        centered
        title={
          <h2 className="text-2xl font-bold text-normal">今日のふりかえり</h2>
        }
        padding="xl"
      >
        <div className="text-normal">
          <div className="space-y-2">
            <p className="text-lg">
              今日の仕事を通して、どんな気づきや感情が湧き上がりましたか？良い点、改善点、そして感じたことを率直に声に出して話してみましょう。
            </p>
            <p className="text-lg">
              声に出すことで、自分の気持ちを整理することができます。また、AIがあなたの声を分析し、あなたの気持ちを分析します。
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="flex h-40 flex-col items-center justify-center gap-4 rounded-md border border-gray-200 p-4">
              <h3 className="text-lg font-bold">今日のハイライト</h3>
              <IconStar size={36} />
            </div>
            <div className="flex h-40 flex-col items-center justify-center gap-4 rounded-md border border-gray-200 p-4">
              <h3 className="text-lg font-bold">達成できたこと</h3>
              <IconCheck size={36} />
            </div>
            <div className="flex h-40 flex-col items-center justify-center gap-4 rounded-md border border-gray-200 p-4">
              <h3 className="text-lg font-bold">改善点・反省</h3>
              <IconEdit size={36} />
            </div>
            <div className="flex h-40 flex-col items-center justify-center gap-4 rounded-md border border-gray-200 p-4">
              <h3 className="text-lg font-bold">感じたこと・感情</h3>
              <IconMoodHappy size={36} />
            </div>
            <div className="flex h-40 flex-col items-center justify-center gap-4 rounded-md border border-gray-200 p-4">
              <h3 className="text-lg font-bold">不満・もやもや</h3>
              <IconMoodAngry size={36} />
            </div>
            <div className="flex h-40 flex-col items-center justify-center gap-4 rounded-md border border-gray-200 p-4">
              <h3 className="text-lg font-bold">明日への一歩</h3>
              <IconRun size={36} />
            </div>
          </div>
          <ActionIcon
            size="xl"
            color="gray"
            radius="xl"
            variant="filled"
            onClick={() => void onClickRecordingButton()}
            className="mx-auto mt-20 w-fit"
          >
            <IconMicrophone
              size="1.75rem"
              // className={clsx(
              //   'transition-colors',
              //   isRecording ? 'text-red-500' : 'text-gray-500',
              // )}
            />
          </ActionIcon>
        </div>
      </Modal>
    </>
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
