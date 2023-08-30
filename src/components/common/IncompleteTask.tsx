import { Text } from '@mantine/core';

const mockTasks: number = 7;

const IncompleteTask = () => {
  return (
    <div>
      <Text fw="700" size="xl" align="center">
        未完了のタスク数
      </Text>
      <Text fw="700" size="lg" align="center">
        {mockTasks}
      </Text>
    </div>
  );
};

export default IncompleteTask;
