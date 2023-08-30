import { ChatView } from './_components/ChatView';
import { TimelineView } from './_components/TimelineView';
import { UserStatusList } from './_components/UserStatusList';
import { BaseAuthLayout } from '@/components/layouts/BaseAuthLayout';
import { Button } from '@mantine/core';

export default function Home() {
  return (
    <BaseAuthLayout>
      <div className="flex divide-x divide-gray-200">
        <div className="h-[calc(100vh-100px)] flex-[3_3_0%] overflow-auto px-8 pb-16 pt-8">
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
                <TimelineView />
              </div>
            </section>
          </div>
        </div>
        <div className="h-[calc(100vh-100px)] flex-[2_2_0%]">
          <ChatView />
        </div>
      </div>
    </BaseAuthLayout>
  );
}
