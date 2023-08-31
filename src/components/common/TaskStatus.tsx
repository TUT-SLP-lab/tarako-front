// import { Text } from '@mantine/core';
import { Text as MantineText } from '@mantine/core';
import { PieChart, Pie, Cell, Text, ResponsiveContainer } from 'recharts';

interface Item {
  name: string;
  value: number;
}

const data: Item[] = [
  { name: 'Done', value: 5 },
  { name: 'Progress', value: 5 },
];
const COLORS: string[] = ['#0088FE', '#00C49F'];

// 各データにラベルをつける
const label = ({
  name,
  value,
  cx,
  x,
  y,
}: {
  name: string;
  value: number;
  cx: number;
  x: number;
  y: number;
}) => {
  const textAnchor = x > cx ? 'start' : 'end';

  return (
    <>
      <Text
        x={x}
        y={y}
        textAnchor={textAnchor}
        style={{ fontWeight: 'bold', fontSize: 15 }}
      >
        {name}
      </Text>
      <Text
        x={x}
        y={y}
        dominantBaseline="hanging"
        textAnchor={textAnchor}
        style={{ fontWeight: 'bold', fontSize: 15 }}
      >
        {value}
      </Text>
    </>
  );
};

const TaskStatus = () => {
  return (
    <div>
      <MantineText fw="700" size="xl" align="center">
        タスクの状態
      </MantineText>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            label={label}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TaskStatus;
