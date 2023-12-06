import { useState, useEffect } from "react";
import styles from "./styles.module.css";

import ReactApexChart, { Props as ChartProps } from "react-apexcharts";

interface Props {
  data?: number[] | [];
}

const WeatherCharts = ({ data }: Props) => {
  const areaChartOptions: ChartProps = {
    chart: {
      id: "new-stack-chart",
      type: "bar",
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
      style: {
        border: "1px solid #ccc",
        background: "#f7f7f7",
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        columnWidth: "15px",
        border: "1px solid #ccc",
        background: "#f7f7f7",
      },
    },
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      marker: {
        show: false,
      },
    },
  };

  const [temp, setTemp] = useState(() => [
    {
      name: "temp",
      data: [] as number[] | [],
    },
  ]);
  useEffect(() => {
    setTemp([
      {
        name: "T°",
        data: (data || []) as number[] | [],
      },
    ]);
  }, [data]);

  return (
    <div className={styles.container}>
      <ReactApexChart
        options={areaChartOptions}
        series={temp}
        type="bar"
        height={50}
      />
    </div>
  );
};

export default WeatherCharts;
