import { ChatInput } from './_components/ChatInput';
import { ChatView } from './_components/ChatView';
import { BaseLayout } from '@/components/layouts/BaseLayout';
import { Avatar } from '@mantine/core';

export default function Home() {
  return (
    <BaseLayout>
      <div className="flex divide-x divide-gray-200">
        <div className="flex-[3_3_0%]"></div>
        <div className="h-[calc(100vh-100px)] flex-[2_2_0%] bg-slate-50">
          <div className="flex h-full flex-col divide-y divide-gray-200">
            <div className="flex items-center gap-1 px-2 py-2">
              <Avatar radius="xl" />
              <span>チャットボット</span>
            </div>
            <div className="flex-grow overflow-auto px-4 py-4">
              <ChatView />
            </div>
            <div className="px-4 py-6">
              <ChatInput />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
