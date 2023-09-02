import { ActionIcon, Textarea } from '@mantine/core';
import { Button } from '@mantine/core';
import { IconMicrophone } from '@tabler/icons-react';

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onClickRecordButton: () => void;
  isRecording?: boolean;
};

export const ChatInput = ({ value, onChange, onClickRecordButton }: Props) => {
  return (
    <div className="flex items-end gap-x-2">
      <Textarea
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        placeholder="やったことや今の気分を入力してください"
        autosize
        minRows={1}
        maxRows={4}
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
          <IconMicrophone size="1.25rem" />
        </ActionIcon>
        <Button color="pink" size="md">
          送信
        </Button>
      </div>
    </div>
  );
};
