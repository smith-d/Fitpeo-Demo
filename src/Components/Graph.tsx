import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";
import { Box, FormControl, Select, MenuItem, Typography } from "@mui/material";

const labels = [
  "5",
  "9",
  "11",
  "13",
  "15",
  "17",
  "19",
  "21",
  "23",
  "25",
  "27",
  "29",
  "31",
  "33",
  "35",
  "37",
  "39",
  "41",
  "43",
  "45",
  "47",
  "49",
  "51",
];

const generateRandomData = () =>
  labels.map((label) => ({
    name: label,
    value: Math.floor(Math.random() * 14001) + 1000,
  }));

const weeklyDataset = generateRandomData();
const monthlyDataset = generateRandomData();

const Graph: React.FC = () => {
  const [selectedDataset, setSelectedDataset] = useState<"weekly" | "monthly">(
    "weekly"
  );

  const data = selectedDataset === "weekly" ? weeklyDataset : monthlyDataset;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "800px",
        }}
      >
        <Typography variant="h4" color="white">
          Activity
        </Typography>
        <FormControl sx={{ minWidth: 120 }}>
          <Select
            value={selectedDataset}
            onChange={(e) =>
              setSelectedDataset(e.target.value as "weekly" | "monthly")
            }
            sx={{
              backgroundColor: "#4C4E52",
              color: "white",
              borderRadius: "20px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: "700px", height: "250px", mt: 2 }}>
        <BarChart width={730} height={235} data={data}>
          <XAxis dataKey="name" angle={-45} textAnchor="end" />
          <YAxis domain={[0, "auto"]} tick={false} axisLine={false} />
          <Tooltip />
          <Legend />
          <ReferenceLine
            y={5000}
            label={{ value: "5k", position: "left", fill: "#B0B8F9", dx: -10 }}
            stroke="#B0B8F9"
            strokeDasharray="3 3"
          />
          <ReferenceLine
            y={10000}
            label={{ value: "10k", position: "left", fill: "#B0B8F9", dx: -10 }}
            stroke="#B0B8F9"
            strokeDasharray="3 3"
          />
          <ReferenceLine
            y={15000}
            label={{ value: "15k", position: "left", fill: "#B0B8F9", dx: -10 }}
            stroke="#B0B8F9"
            strokeDasharray="3 3"
          />
          <Bar
            dataKey="value"
            fill={selectedDataset === "weekly" ? "#6989F5" : "#FF6584"}
            radius={[10, 10, 10, 10]}
          />
        </BarChart>
      </Box>
    </Box>
  );
};

export default Graph;
