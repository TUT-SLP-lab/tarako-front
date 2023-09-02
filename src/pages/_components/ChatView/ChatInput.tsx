import { ActionIcon, Textarea } from '@mantine/core';
import { Button } from '@mantine/core';
import { IconMicrophone } from '@tabler/icons-react';

export const ChatInput = () => {
  return (
    <div className="flex items-end gap-x-2">
      <Textarea
        placeholder="やったことや今の気分を入力してください"
        autosize
        minRows={1}
        maxRows={4}
        className="flex-1"
      />
      <div className="flex items-center gap-x-12">
        <ActionIcon size="lg" color="gray" radius="xl" variant="transparent">
          <IconMicrophone size="1.25rem" />
        </ActionIcon>
        <Button color="pink" size="md">
          送信
        </Button>
      </div>
    </div>
  );
};
