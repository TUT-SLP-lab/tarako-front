import { Text } from '@mantine/core';

const mockSeverities: number = 50;

//NOTE: 学生らしさを出すのであれば，深刻度の高さによって数値の色を変えてもよさそう
const TodaysSeverity = () => {
  return (
    <div>
      <Text fw="700" size="xl" align="center">
        今日の深刻度
      </Text>
      <Text fw="700" size="lg" align="center">
        {mockSeverities}
      </Text>
    </div>
  );
};

export default TodaysSeverity;
