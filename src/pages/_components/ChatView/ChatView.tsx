import type { Chat } from './ChatList';

import { ChatInput } from './ChatInput';
import { ChatList } from './ChatList';
import { useASRInput } from '@/utils/hooks/useASRInput';
import { Tooltip } from '@mantine/core';
import { IconMessageChatbot, IconQuestionMark } from '@tabler/icons-react';

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
  const { inputValue, setInputValue, toggleRecording, transcript, recording } =
    useASRInput({
      target: 'chatbot',
    });

  return (
    <div className="flex h-full flex-col divide-y divide-gray-200 bg-slate-50">
      <div className="flex items-center gap-1 bg-slate-100 px-2 py-4">
        <IconMessageChatbot size={24} />
        <span>チャットボット</span>
        <div className="ml-4">
          <Tooltip
            label="チャットボットと会話することで、自動で日報を作成することができます。また、チャットボットはあなたの日報を分析し、あなたの気分を分析します。分析した結果をもとに部署の上長に報告することもできます。"
            position="bottom"
            withArrow
            multiline
            width={300}
          >
            <div className="bg-base flex items-center justify-center rounded-full">
              <IconQuestionMark size="1.25rem" className="text-white" />
            </div>
          </Tooltip>
        </div>
      </div>
      <div className="flex-grow overflow-auto px-4 py-4">
        <ChatList chat={MOCK_CHAT} />
      </div>
      <div className="bg-slate-100 px-4 py-6">
        <ChatInput
          value={inputValue}
          transcript={transcript}
          onChange={setInputValue}
          onSubmit={() => void 0}
          onClickRecordButton={toggleRecording}
          recording={recording}
        />
      </div>
    </div>
  );
};
