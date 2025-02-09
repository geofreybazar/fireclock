import { Pie } from "react-chartjs-2";

function PieChart({ data, title }) {
  const options = {
    plugins: {
      title: {
        display: true,
        text: title,
      },
    },
  };

  return <Pie data={data} options={options} />;
}

export default PieChart;
