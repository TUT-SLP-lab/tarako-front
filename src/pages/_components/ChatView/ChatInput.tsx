import { ActionIcon, Textarea } from '@mantine/core';
import { Button } from '@mantine/core';
import { IconMicrophone } from '@tabler/icons-react';
import clsx from 'clsx';

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onClickRecordButton: () => void;
  transcript: string;
  isRecording?: boolean;
};

export const ChatInput = ({
  value,
  onChange,
  onClickRecordButton,
  transcript,
  isRecording,
}: Props) => {
  return (
    <div>
      {isRecording && <div className="mb-8 text-lg">{transcript}</div>}
      <div className="flex items-end gap-x-2">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
          placeholder="やったことや今の気分を入力してください"
          autosize
          minRows={1}
          maxRows={4}
          disabled={isRecording}
          className="flex-1"
        />
        <div className="flex items-center gap-x-12">
          <ActionIcon
            size="lg"
            color="gray"
            radius="xl"
            variant="transparent"
            onClick={onClickRecordButton}
          >
            <IconMicrophone
              size="1.25rem"
              className={clsx(
                'transition-colors',
                isRecording ? 'text-red-500' : 'text-gray-500',
              )}
            />
          </ActionIcon>
          <Button color="pink" size="md" disabled={isRecording}>
            送信
          </Button>
        </div>
      </div>
    </div>
  );
};
