import type { Chat } from './ChatList';

import { ChatInput } from './ChatInput';
import { ChatList } from './ChatList';
import { IconMessageChatbot } from '@tabler/icons-react';

const MOCK_CHAT: Chat[] = [
  {
    from: 'bot',
    message: 'こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'user',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'bot',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
];

export const ChatView = () => {
  return (
    <div className="flex h-full flex-col divide-y divide-gray-200 bg-slate-50">
      <div className="flex items-center gap-1 bg-slate-100 px-2 py-4">
        <IconMessageChatbot size={24} />
        <span>チャットボット</span>
      </div>
      <div className="flex-grow overflow-auto px-4 py-4">
        <ChatList chat={MOCK_CHAT} />
      </div>
      <div className="bg-slate-100 px-4 py-6">
        <ChatInput />
      </div>
    </div>
  );
};
