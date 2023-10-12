"use client";

import { Chart as chartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

chartJS.register(ArcElement, Tooltip, Legend);

type Products = {
  type: string;
  qunatity: number;
};

type Props = {
  res: Products[];
};

export default function DoughnutChart({ res }: Props) {
  const values = res.map((el: { qunatity: number }) => el.qunatity);

  const data = {
    labels: res.map((el: { type: string }) => el.type),
    datasets: [
      {
        data: values,
        backgroundColor: ["green", "red", "blue"],
        borderWidth: 1,
        weight: 0.5
      }
    ]
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "right"
      }
    },
    radius: 65,
    cutout: "70%",
    maintainAspectRatio: false
  };
  return (
    <div className="h-[150px]  w-full  ">
      <Doughnut data={data} options={options} className="w-full" />
    </div>
  );
}
