import { Pie } from "react-chartjs-2";

function PieChart({ data }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Pie data={data} options={options} />;
}

export default PieChart;
