export interface ChartProps {
  dashboardData: any;
  LineData?: any;
  lineKey?: string;
}

export const DashBoardOrirentation = "Vertical";

export const BarGraphOptions = [
  { label: "Germination Rate", value: "germination_rate" },
  { label: "Plant Height", value: "plant_height" },
  { label: "Insect Count", value: "insect_count" },
];

export const FilterOptions = [
  { label: "Filters", value: "none" },
  { label: "Average", value: "average" },
  { label: "Mean Data", value: "meanData" },
  { label: "Deviation", value: "deviation" },
];

export const Germinationdata = [
  {
    title: "Replication 1",
    treatment1: 90,
    treatment2: 20,
    treatment3: 90,
    treatment4: 90,
    fillColor: "#FF7574",
  },
  {
    title: "Replication 2",
    treatment1: 80,
    treatment2: 30,
    treatment3: 70,
    treatment4: 85,
    fillColor: "#EF9234",
  },
  {
    title: "Replication 3",
    treatment1: 95,
    treatment2: 25,
    treatment3: 85,
    treatment4: 80,
    fillColor: "#7CC674",
  },
  {
    title: "Replication 4",
    treatment1: 88,
    treatment2: 35,
    treatment3: 78,
    treatment4: 82,
    fillColor: "#519DE9",
  },
];

export const GerminationLineData = [
  { treatment: "treatment1", avg: 45 },
  { treatment: "treatment2", avg: 10 },
  { treatment: "treatment3", avg: 47 },
  { treatment: "treatment4", avg: 44 },
];

export const GerminationLineMeanData = [
  { treatment: "treatment1", mean: 88 },
  { treatment: "treatment2", mean: 29 },
  { treatment: "treatment3", mean: 80 },
  { treatment: "treatment4", mean: 85 },
];

export const GerminationLineDeviationData = [
  { treatment: "treatment1", deviation: 4 },
  { treatment: "treatment2", deviation: 4 },
  { treatment: "treatment3", deviation: 5 },
  { treatment: "treatment4", deviation: 4 },
];

export const PlantHeightData = [
  {
    title: "Replication 1",
    treatment1: 30,
    treatment2: 28,
    treatment3: 32,
    treatment4: 29,
    fillColor: "#FF7574",
  },
  {
    title: "Replication 2",
    treatment1: 33,
    treatment2: 31,
    treatment3: 34,
    treatment4: 30,
    fillColor: "#EF9234",
  },
  {
    title: "Replication 3",
    treatment1: 35,
    treatment2: 32,
    treatment3: 36,
    treatment4: 33,
    fillColor: "#7CC674",
  },
  {
    title: "Replication 4",
    treatment1: 38,
    treatment2: 35,
    treatment3: 37,
    treatment4: 36,
    fillColor: "#519DE9",
  },
];

export const InsectRateData = [
  {
    title: "Replication 1",
    treatment1: 8,
    treatment2: 6,
    treatment3: 7,
    treatment4: 9,
    fillColor: "#FF7574",
  },
  {
    title: "Replication 2",
    treatment1: 5,
    treatment2: 4,
    treatment3: 6,
    treatment4: 5,
    fillColor: "#EF9234",
  },
  {
    title: "Replication 3",
    treatment1: 7,
    treatment2: 8,
    treatment3: 6,
    treatment4: 7,
    fillColor: "#7CC674",
  },
  {
    title: "Replication 4",
    treatment1: 9,
    treatment2: 10,
    treatment3: 8,
    treatment4: 7,
    fillColor: "#519DE9",
  },
];

export const LineData = [
  { treatment: "treatment1", avg: 45 },
  { treatment: "treatment2", avg: 60 },
  { treatment: "treatment3", avg: 75 },
  { treatment: "treatment4", avg: 90 },
];
