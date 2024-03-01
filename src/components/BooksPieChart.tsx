import { Box } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

const BooksPieChart = ({ series }: any) => {
  return (
    <Box>
      <PieChart
        series={series}
        width={400}
        height={200}
      />
    </Box>
  );
};

export default BooksPieChart;
