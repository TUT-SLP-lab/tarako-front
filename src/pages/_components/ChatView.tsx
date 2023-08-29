import { Avatar } from '@mantine/core';

const CHAT_LOG = [
  {
    from: 'bot',
    message: 'こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
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
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
  {
    from: 'me',
    message:
      'こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！こんにちは！',
    sentAt: new Date(),
  },
];

export const ChatView = () => {
  return (
    <div className="space-y-4">
      {CHAT_LOG.map((log) => {
        return (
          <div
            key={log.sentAt.getTime()}
            className={`flex ${
              log.from === 'bot' ? 'justify-start pr-16' : 'justify-end pl-16'
            }`}
          >
            <div>
              <div className="flex items-center gap-x-1">
                {log.from === 'bot' && <Avatar radius="xl" />}
                <div
                  className={`rounded-lg p-2 ${
                    log.from === 'bot' ? 'bg-gray-100' : 'bg-blue-100'
                  }`}
                >
                  {log.message}
                </div>
                {log.from === 'me' && <Avatar radius="xl" />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
