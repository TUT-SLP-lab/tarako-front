import { Timeline } from '@mantine/core';
import { IconGitBranch } from '@tabler/icons-react';
import dayjs from 'dayjs';

type TimelineItem = {
  title: string;
  description: string;
  date: Date;
  severity: 0 | 1 | 2 | 3 | 4 | 5; // TODO: バックエンド側に従う
  category: 'task' | 'event'; // TODO: バックエンド側に従う
};

const MOCK_TIMELINE: TimelineItem[] = [
  {
    title: '株式会社木内への電話対応',
    description: '急遽電話での対応が入り、対応中の案件を中断して対応しました。',
    date: new Date(),
    severity: 0,
    category: 'event',
  },
  {
    title: '株式会社前島の年末調整業務',
    description: '年末調整業務を行い始めました',
    date: new Date(),
    severity: 3,
    category: 'task',
  },
  {
    title: '部署ミーティング',
    description: '週次で行っている部署ミーティング',
    date: new Date(),
    severity: 0,
    category: 'task',
  },
];

export const TaskTimeline = () => {
  return (
    <Timeline bulletSize={24}>
      {MOCK_TIMELINE.map((item) => {
        return (
          <Timeline.Item
            key={item.title}
            bullet={<IconGitBranch size={16} />}
            bulletSize={32}
            title={
              <div className="flex items-start justify-between">
                <p className="text-xl">{item.title}</p>
                <p className="text-md text-light">
                  {dayjs(item.date).format('HH:mm')}
                </p>
              </div>
            }
            className="cursor-pointer rounded-md border border-gray-200 py-4 pl-8 pr-4 hover:bg-gray-50"
          >
            <div className="pb-8">
              <p className="text-md text-light">{item.description}</p>
            </div>
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
};
