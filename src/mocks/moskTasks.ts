import type { TaskTimelineItem } from '@/components/features/task/TaskTimeline';

export const mockTasks: TaskTimelineItem[] = [
  {
    id: '1',
    title: '株式会社木内への電話対応',
    description: '急遽電話での対応が入り、対応中の案件を中断して対応しました。',
    date: new Date(),
    severity: 0,
    category: 'event',
  },
  {
    id: '2',
    title: '株式会社前島の年末調整業務',
    description: '年末調整業務を行い始めました',
    date: new Date(),
    severity: 3,
    category: 'task',
  },
  {
    id: '3',
    title: '部署ミーティング',
    description: '週次で行っている部署ミーティング',
    date: new Date(),
    severity: 0,
    category: 'task',
  },
];
