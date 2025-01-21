import {
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    LineChart,
    Line,
    Scatter,
    ScatterChart as ScatterChaat,
    ResponsiveContainer,
  } from "recharts";
  import { DashboardData } from "../../Sampledata";
  
  function ScatterChart() {
    return (
      <ResponsiveContainer width={"100%"} height={250}>
        <ScatterChaat
          width={730}
          height={250}
          layout="vertical"
          data={DashboardData}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis dataKey="replication" type="category" />
  
          <Tooltip
            formatter={(value, name) => {
              let unit = "";
              if (name === "GerminationRate") unit = "%";
              if (name === "NutrientLevel") unit = "mg/kg";
              if (name === "PlantHeight") unit = "cm";
              if (name === "YieldPerArea") unit = "kg/m²";
              if (name === "InsectCount") unit = "per unit";
              return [`${value} ${unit}`, name];
            }}
          />
  
          <Legend />
  
          <Scatter dataKey="GerminationRate" fill="#8884d8" />
          <Scatter dataKey="NutrientLevel" fill="#82ca9d" />
          <Scatter dataKey="PlantHeight" fill="#ffc658" />
          <Scatter dataKey="YieldPerArea" fill="#ff8042" />
          <Scatter dataKey="InsectCount" fill="#00C49F" />
        </ScatterChaat>
      </ResponsiveContainer>
    );
  }
  
  export default ScatterChart;
  