import {
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Scatter,
    ScatterChart as ScatterChaat,
    ResponsiveContainer,
  } from "recharts";
  import { ChartProps } from "../../Sampledata";
  
  function ScatterChart({ dashboardData }: ChartProps) {
    const treatmentKeys: string[] = Object.keys(dashboardData[0]).filter(
      (key) => key !== "title"
    );
    const transformedData = treatmentKeys.flatMap((treatment) => {
      return dashboardData.map((replication: any) => ({
        treatment,
        value: replication[treatment],
        replication: replication.title,
      }));
    });
    return (
      <ResponsiveContainer width={"100%"} height={220}>
        <ScatterChaat width={730} height={250}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="treatment" type="category" />
          <YAxis dataKey="value" />
          <Tooltip />
  
          {dashboardData.map((replication: any) => (
            <Scatter
              key={replication.title}
              name={replication.title}
              data={transformedData.filter(
                (d) => d.replication === replication.title
              )}
              fill={replication.fillColor}
              stroke={replication.fillColor}
            />
          ))}
        </ScatterChaat>
      </ResponsiveContainer>
    );
  }
  
  export default ScatterChart;
  