import { PieChart, Pie, Cell, Text, ResponsiveContainer } from 'recharts';

type UsersData = {
  name: string;
  value: number;
};

type Props = {
  title: string;
  data: UsersData[];
};

const TaskStatus = (props: Props) => {
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

  const generateRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <div>
      <div className="text-center text-xl font-bold">{props.title}</div>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={props.data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            label={label}
            dataKey="value"
          >
            {props.data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={generateRandomColor()} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TaskStatus;
