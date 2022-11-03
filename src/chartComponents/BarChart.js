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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ incoming, outgoing }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        title: {
          display: true,
          text: "Annual",
        },
      },
    },
  };
  const labels = ["Summary"];

  const data = {
    labels,
    datasets: [
      {
        label: "Incoming",
        data: [incoming],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Outgoing",
        data: [outgoing],
        backgroundColor: "rgba(147, 255, 99)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default BarChart;
