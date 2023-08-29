import { ChatInput } from './_components/ChatInput';
import { ChatView } from './_components/ChatView';
import { BaseLayout } from '@/components/layouts/BaseLayout';

export default function Home() {
  return (
    <BaseLayout>
      <div className="flex divide-x divide-gray-200">
        <div className="flex-[3_3_0%]"></div>
        <div className="h-[calc(100vh-100px)] flex-[2_2_0%] overflow-scroll bg-slate-50 px-4 pb-32 pt-4">
          <ChatView />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-slate-50 px-4 py-8">
        <ChatInput />
      </div>
    </BaseLayout>
  );
}
