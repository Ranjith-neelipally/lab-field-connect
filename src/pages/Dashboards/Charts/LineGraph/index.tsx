import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import { ChartProps } from "../../Sampledata";

function LineGraph({ dashboardData }: ChartProps) {
  const treatmentKeys = Object.keys(dashboardData[0]).filter(
    (key) => key !== "title"
  );
  return (
    <ResponsiveContainer width={"100%"} height={220}>
      <LineChart
        width={730}
        height={250}
        data={treatmentKeys.map((treatment) => {
          const entry: any = { treatment };
          dashboardData.forEach((replication: any) => {
            entry[replication.title] = replication[treatment];
          });
          return entry;
        })}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="treatment" type="category" />
        <YAxis />
        <Tooltip />
        {dashboardData.map((replication: any) => (
          <Line
            key={replication.title}
            dataKey={replication.title}
            fill={replication.fillColor}
            stroke={replication.fillColor}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineGraph;
