import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

type UsersData = {
  date: string;
  users: { [key: string]: number };
};

type Props = {
  title: string;
  data: UsersData[];
};

type ChartData = {
  [key: string]: number | string;
};

//NOTE: 直近の1週間だけグラフに表示させるだけで良いと思う
const SeverityTrend = (props: Props) => {
  const users = Object.keys(props.data[0].users);

  // linechartのフォーマットへと変換 (ex. { date: '2023-01-01', user1: 50, user2: 30},)
  const chartDatas: ChartData[] = [];

  props.data.forEach((item) => {
    const users = item.users;
    let data: ChartData = { date: item.date };

    for (const key in users) {
      data[key] = users[key];
    }

    chartDatas.push(data);
    data = {};
  });

  const generateRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <>
      <div className="text-center text-xl font-bold">{props.title}</div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartDatas} margin={{ bottom: 30, right: 30 }}>
          {users.map((user, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={user}
              stroke={generateRandomColor()}
              strokeWidth={2}
            />
          ))}
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis
            dataKey="date"
            angle={0}
            dx={-10}
            dy={5}
            interval={1}
            tick={{ fontSize: 10, fill: '#000' }}
          />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default SeverityTrend;
