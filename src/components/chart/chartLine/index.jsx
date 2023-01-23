import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const ChartLine = () => {
  const data = [
    { name: "Running", datas: 20000 },
    { name: "Area Polling 2", datas: 150000 },
    { name: "Area Polling 3", datas: 100000 },
    { name: "Area Polling 4", datas: 500000 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Graph OEE</h1>
      <div className="flex">
        <div className="border">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="datas"
              isAnimationActive={false}
              data={data}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
        <div className="border">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 80,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="datas" fill="#8884d8" background={{ fill: "#eee" }} />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default ChartLine;
