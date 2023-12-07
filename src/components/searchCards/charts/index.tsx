import { useState, useEffect, useMemo, memo } from "react";
import styles from "./styles.module.css";

import ReactApexChart, { Props as ChartProps } from "react-apexcharts";
import useSearch from "hooks/useSearch";
import { useGetDaysQuery } from "store/reducer/weather";
import useSwitch from "hooks/useSwitch";

interface Props {
  data?: number[] | [];
}

const WeatherCharts = ({ data }: Props) => {
  const { text } = useSearch();
  const { format } = useSwitch();
  const {
    data: { forecast: { forecastday } = { forecastday: {} } } = {
      forecast: {},
    } || {},
  } = useGetDaysQuery(text);

  const temperatureId = format === "m" ? "°C" : "°F";

  const temperatures = useMemo(() => {
    const tempC = forecastday?.map(({ day }: { day: any }) => {
      return day?.maxtemp_c;
    });
    const tempF = forecastday?.map(({ day }: { day: any }) => {
      return day?.maxtemp_f;
    });
    return format === "m" ? tempC : tempF;
  }, [forecastday, format]);

  const dates = useMemo(() => {
    return (
      forecastday?.map(({ date }: { date: string }) => {
        return new Date(date).getDate();
      }) || []
    );
  }, [forecastday]);

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
    },
    formatter: function (val: any) {
      return "Text: " + val;
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        columnWidth: "10px",
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
        name: temperatureId,
        data: (temperatures || []) as number[] | [],
      },
    ]);
  }, [data, temperatureId, temperatures]);

  return (
    <div className={styles.container}>
      <span>Weather forecast for 10 days</span>
      <ReactApexChart
        options={areaChartOptions}
        series={temp}
        type="bar"
        height={50}
        width={300}
      />
      <div className={styles.dates}>
        {dates?.map((day: number) => {
          return <div key={day}>{day}</div>;
        })}
      </div>
    </div>
  );
};

export default memo(WeatherCharts);
