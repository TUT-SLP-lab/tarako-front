import { ChatView } from './_components/ChatView';
import { DashBoardView } from './_components/DashBoardView';
import { BaseAuthLayout } from '@/components/layouts/BaseAuthLayout';

export default function Home() {
  return (
    <BaseAuthLayout>
      <div className="flex divide-x divide-gray-200">
        <div className="h-[calc(100vh-100px)] flex-[3_3_0%] overflow-auto px-8 pb-16 pt-8">
          <DashBoardView />
        </div>
        <div className="h-[calc(100vh-100px)] flex-[2_2_0%]">
          <ChatView />
        </div>
      </div>
    </BaseAuthLayout>
  );
}
