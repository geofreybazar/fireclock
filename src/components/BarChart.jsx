import { Bar } from "react-chartjs-2";

function BarChart({ chartData, tooltip }) {
  return (
    <div>
      {!tooltip ? (
        <Bar data={chartData} />
      ) : (
        <Bar data={chartData} options={tooltip} />
      )}
    </div>
  );
}

export default BarChart;
