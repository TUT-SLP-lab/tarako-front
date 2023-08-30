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
  uv: number;
}
const mockData: Item[] = [
  { name: '2023-01-01', uv: 50 },
  { name: '2023-01-02', uv: 50 },
  { name: '2023-01-03', uv: 30 },
  { name: '2023-01-04', uv: 10 },
];
const SeverityTransition = () => {
  return (
    <div>
      <Text fw="700" size="xl" align="center">
        深刻度の推移
      </Text>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={mockData}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" tick={{ fontSize: 10 }} />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SeverityTransition;
