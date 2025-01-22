import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  Line,
} from "recharts";
import { ChartProps } from "../../Sampledata";

function BarGraph({ dashboardData, LineData, lineKey }: ChartProps) {
  const treatmentKeys = Object.keys(dashboardData[0]).filter(
    (key) => key !== "title"
  );

  const maxBarValue = Math.max(
    ...dashboardData.flatMap((replication: any) =>
      Object.values(replication).filter((value) => typeof value === "number")
    )
  );

  return (
    <ResponsiveContainer width={"100%"} height={220}>
      <ComposedChart
        width={730}
        height={300}
        barSize={30}
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
        <YAxis domain={[0, maxBarValue + 20]} />
        <Tooltip />
        {LineData && (
          <Line
            type="monotone"
            data={LineData} 
            dataKey={lineKey} 
            stroke="#ff0000" 
            strokeWidth={2}
            dot={{ r: 5 }} 
            name="Midpoint Line"
          />
        )}
        {dashboardData.map((replication: any) => (
          <>
            {replication.title !== "fillColor" && (
              <Bar
                key={replication.title}
                dataKey={replication.title}
                fill={replication.fillColor}
              />
            )}
          </>
        ))}
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default BarGraph;
