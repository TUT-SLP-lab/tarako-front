import { UserStatusList } from './UserStatusList';
import { TaskTimeline } from '@/components/features/task/TaskTimeline';
import { Button } from '@mantine/core';

export const DashBoardView = () => {
  return (
    <div className="mx-auto max-w-screen-lg">
      <UserStatusList />
      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Today</h2>
          <Button size="lg" variant="outline" color="pink">
            日報を作成する
          </Button>
        </div>
        <div className="mt-8">
          <TaskTimeline />
        </div>
      </section>
    </div>
  );
};
