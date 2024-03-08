import { PieChart } from "@mui/x-charts/PieChart";

const BooksPieChart = ({ series }: any) => {
  return (
    <PieChart
      className="chart"
      series={series}
      width={600}
      height={350}
    />
  );
};

export default BooksPieChart;
