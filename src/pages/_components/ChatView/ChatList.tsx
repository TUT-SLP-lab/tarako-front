export type Chat = {
  from: 'bot' | 'user';
  message: string;
  sentAt: Date;
};

type Props = {
  chat: Chat[];
};

export const ChatList = ({ chat }: Props) => {
  return (
    <div className="space-y-4">
      {chat.map((log) => {
        return (
          <div
            key={log.sentAt.getTime()}
            className={`flex ${
              log.from === 'bot' ? 'justify-start pr-16' : 'justify-end pl-16'
            }`}
          >
            <div>
              <div className="flex items-center gap-x-1">
                <div
                  className={`rounded-lg p-2 ${
                    log.from === 'bot' ? 'bg-gray-100' : 'bg-blue-100'
                  }`}
                >
                  {log.message}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
