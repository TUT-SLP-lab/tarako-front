import { TaskDetailModal } from './TaskDetailModal';
import { mockTasks } from '@/mocks/moskTasks';
import { Timeline } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconGitBranch } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { Fragment, useState } from 'react';

export type TaskTimelineItem = {
  id: string;
  title: string;
  description: string;
  date: Date;
  severity: 0 | 1 | 2 | 3 | 4 | 5; // TODO: バックエンド側に従う
  category: 'task' | 'event'; // TODO: バックエンド側に従う
};

export const TaskTimeline = () => {
  const [opened, { close, open }] = useDisclosure(false);
  const [modalTaskId, setModalTaskId] = useState('');

  const onClickTimelineItem = (taskId: string) => {
    setModalTaskId(taskId);
    open();
  };

  return (
    <>
      <Timeline bulletSize={24}>
        {mockTasks.map((item) => {
          return (
            <Timeline.Item
              key={item.id}
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
              onClick={() => onClickTimelineItem(item.id)}
              className="cursor-pointer rounded-md border border-gray-200 py-4 pl-8 pr-4 hover:bg-gray-50"
            >
              <div className="pb-8">
                <p className="text-md text-light">{item.description}</p>
              </div>
            </Timeline.Item>
          );
        })}
      </Timeline>
      <TaskDetailModal taskId={modalTaskId} opened={opened} onClose={close} />
    </>
  );
};
