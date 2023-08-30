import { Textarea } from '@mantine/core';
import { Button } from '@mantine/core';

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
      <Button color="pink" size="md">
        送信
      </Button>
    </div>
  );
};
