"use client";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Tooltip,
  Legend,
  LinearScale
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, Tooltip, Legend, LinearScale);

type Users = {
  Guest: number;
  User: number;
};

type Props = {
  users: Users[];
};

export default function BarChart({ users }: Props) {
  const userData = users.map((user) => user.User);
  const guestData = users.map((user) => user.Guest);

  const data = {
    labels: ["Week1", "Week2", "Week3", "Week4"],
    datasets: [
      {
        label: "User",
        data: userData,
        backgroundColor: "#98D89E",
        borderColor: "black",
        borderWidth: 1
      },
      {
        label: "Guest",
        data: guestData,
        backgroundColor: "#EE8484",
        borderColor: "black",
        borderWidth: 1
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        max: 500
      }
    }
  };

  return <Bar data={data} options={options} />;
}
