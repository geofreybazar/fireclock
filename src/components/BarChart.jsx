import { Bar } from "react-chartjs-2";

function BarChart({ chartData, chartTitle }) {
  const options = {
    plugins: {
      title: {
        display: true,
        text: chartTitle,
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default BarChart;
