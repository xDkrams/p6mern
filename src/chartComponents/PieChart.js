import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ core, strat, supp, fInfo }) => {
  const data = {
    labels: ["Core", "Strategic", "Support", "Info"],
    datasets: [
      {
        label: "# of Votes",
        data: [core, strat, supp, fInfo],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",

          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",

          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};
export default PieChart;
