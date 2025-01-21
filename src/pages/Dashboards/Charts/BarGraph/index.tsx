import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  import { DashboardData } from "../../Sampledata";
  
  function BarGraph() {
    return (
      <ResponsiveContainer width={"100%"} height={250}>
        <BarChart width={730} height={250} data={DashboardData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
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
          />{" "}
          <Legend />
          <Bar dataKey="GerminationRate" fill="#8884d8" />
          <Bar dataKey="NutrientLevel" fill="#82ca9d" />
          <Bar dataKey="PlantHeight" fill="#ffc658" />
          <Bar dataKey="YieldPerArea" fill="#ff8042" />
          <Bar dataKey="InsectCount" fill="#00C49F" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
  
  export default BarGraph;
  