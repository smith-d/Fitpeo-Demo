import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation"; // Import the annotation plugin

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin // Register the annotation plugin
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
    annotation: {
      annotations: {
        line1: {
          type: "line",
          yMin: 5000,
          yMax: 5000,
          borderColor: "#B0B8F9", // Lighter shade of blue
          borderWidth: 2,
          label: {
            content: "5000",
            enabled: true,
            position: "right",
            color: "#B0B8F9", // Same lighter color as the line
          },
        },
        line2: {
          type: "line",
          yMin: 10000,
          yMax: 10000,
          borderColor: "#B0B8F9", // Lighter shade of blue
          borderWidth: 2,
          label: {
            content: "10000",
            enabled: true,
            position: "right",
            color: "#B0B8F9", // Same lighter color as the line
          },
        },
        line3: {
          type: "line",
          yMin: 15000,
          yMax: 15000,
          borderColor: "#B0B8F9", // Lighter shade of blue
          borderWidth: 2,
          label: {
            content: "15000",
            enabled: true,
            position: "right",
            color: "#B0B8F9", // Same lighter color as the line
          },
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 5000,
        callback: function (value) {
          if (value === 0) {
            return value;
          } else {
            return value + "k";
          }
        },
      },
    },
  },
};

const labels = ["5", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27"];

const weeklyDataset = {
  label: "Weekly",
  data: [
    3000, 9000, 4000, 4000, 5000, 6000, 9000, 12000, 15000, 7000, 10000, 6000,
  ],
  backgroundColor: "#6989F5", // Primary color
  borderColor: "#6989F5",
  borderWidth: 1,
  borderRadius: Number.MAX_VALUE,
};

const monthlyDataset = {
  label: "Monthly",
  data: [
    5000, 7000, 6000, 8000, 9000, 11000, 14000, 16000, 12000, 8000, 11000, 9000,
  ],
  backgroundColor: "#FF6584", // Secondary color
  borderColor: "#FF6584",
  borderWidth: 1,
  borderRadius: 8,
};

export default function Graph() {
  const [selectedDataset, setSelectedDataset] = useState("weekly");

  const data = {
    labels,
    datasets: selectedDataset === "weekly" ? [weeklyDataset] : [monthlyDataset],
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
          width: "800px",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Activity
        </div>
        <div
          style={{
            position: "relative",
            display: "inline-block",
          }}
        >
          <select
            id="filter"
            value={selectedDataset}
            onChange={(e) => setSelectedDataset(e.target.value)}
            style={{
              padding: "10px 16px",
              borderRadius: "20px",
              backgroundColor: "#4C4E52",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              outline: "none",
              transition: "background-color 0.3s ease",
              appearance: "none",
              position: "relative",
            }}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "5px",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            ▼
          </div>
        </div>
      </div>
      <div style={{ width: "800px", height: "400px" }}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
