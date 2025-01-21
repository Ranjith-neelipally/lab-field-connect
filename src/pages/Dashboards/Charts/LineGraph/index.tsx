import {
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    LineChart,
    Line,
    ResponsiveContainer,
  } from "recharts";
  import { DashboardData } from "../../Sampledata";
  
  function LineGraph() {
    return (
      <ResponsiveContainer width={"100%"} height={250}>
        <LineChart
          width={730}
          height={250}
          data={DashboardData}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis dataKey="replication" type="category" />
          <Tooltip
            formatter={(value, name) => {
              let unit = "";
              // Define units based on the dataKey
              if (name === "GerminationRate") unit = "%";
              if (name === "NutrientLevel") unit = "mg/kg";
              if (name === "PlantHeight") unit = "cm";
              if (name === "YieldPerArea") unit = "kg/m²";
              if (name === "InsectCount") unit = "per unit";
              return [`${value} ${unit}`, name];
            }}
          />
          <Legend />
          <Line dataKey="GerminationRate" fill="#8884d8" />
          <Line dataKey="NutrientLevel" fill="#82ca9d" />
          <Line dataKey="PlantHeight" fill="#ffc658" />
          <Line dataKey="YieldPerArea" fill="#ff8042" />
          <Line dataKey="InsectCount" fill="#00C49F" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
  
  export default LineGraph;
  