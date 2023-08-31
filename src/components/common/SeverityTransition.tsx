import { Text } from '@mantine/core';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';

interface Item {
  name: string;
  value: number;
}
const mockData: Item[] = [
  { name: '2023-01-01', value: 50 },
  { name: '2023-01-02', value: 50 },
  { name: '2023-01-03', value: 30 },
  { name: '2023-01-04', value: 10 },
  { name: '2023-01-05', value: 10 },
];

//NOTE: 直近の1週間だけグラフに表示させるだけで良いと思う
const SeverityTransition = () => {
  return (
    <div>
      <Text fw="700" size="xl" align="center">
        深刻度の推移
      </Text>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={mockData} margin={{ right: 20 }}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={2}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis
            dataKey="name"
            angle={0}
            dx={-10}
            dy={5}
            interval={1}
            tick={{ fontSize: 10, fill: '#000' }}
          />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SeverityTransition;
