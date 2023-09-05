import { TaskDetailModal } from './TaskDetailModal';
import { useTasks } from '@/utils/hooks/api/useTasks';
import { Timeline } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconGitBranch } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export const TaskTimeline = () => {
  const [opened, { close, open }] = useDisclosure(false);
  const [modalTaskId, setModalTaskId] = useState('');
  const { tasks, isLoading } = useTasks();

  const onClickTimelineItem = (taskId: string) => {
    setModalTaskId(taskId);
    open();
  };

  // TODO: 原因を調査する
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  if (tasks == undefined || isLoading) {
    return null;
  }

  return (
    <>
      <Timeline bulletSize={24}>
        {tasks.map((item) => {
          return (
            <Timeline.Item
              key={item.task_id}
              bullet={<IconGitBranch size={16} />}
              bulletSize={32}
              title={
                <div className="flex items-start justify-between">
                  <p className="text-xl">{item.title}</p>
                  <p className="text-md text-light">
                    {dayjs(item.updated_at).format('HH:mm')}
                  </p>
                </div>
              }
              onClick={() => onClickTimelineItem(item.task_id as string)}
              className="cursor-pointer rounded-md border border-gray-200 py-4 pl-8 pr-4 hover:bg-gray-50"
            >
              <div className="pb-8">
                <p className="text-md text-light">{item.details}</p>
              </div>
            </Timeline.Item>
          );
        })}
      </Timeline>
      <TaskDetailModal taskId={modalTaskId} opened={opened} onClose={close} />
    </>
  );
};
