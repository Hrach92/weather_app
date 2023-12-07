import { useMemo } from "react";
import useSearch from "hooks/useSearch";
import { useGetDaysQuery } from "store/reducer/weather";
import useSwitch from "hooks/useSwitch";

import Chart from "react-apexcharts";

const WeatherCharts = () => {
  const { text } = useSearch();
  const { format } = useSwitch();
  const {
    data: { forecast: { forecastday } = { forecastday: {} } } = {
      forecast: {},
    } || {},
  } = useGetDaysQuery(text);

  const temperatureId = format === "m" ? "°C" : "°F";

  const temperatures = useMemo(() => {
    const maxTempC = forecastday?.map(({ day }: { day: any }) => {
      return day?.maxtemp_c;
    });
    const maxTempF = forecastday?.map(({ day }: { day: any }) => {
      return day?.maxtemp_f;
    });
    const minTempC = forecastday?.map(({ day }: { day: any }) => {
      return day?.mintemp_c;
    });
    const minTempF = forecastday?.map(({ day }: { day: any }) => {
      return day?.mintemp_f;
    });
    return {
      max: format === "m" ? maxTempC : maxTempF,
      min: format === "m" ? minTempC : minTempF,
    };
  }, [forecastday, format]);

  const dates = useMemo(() => {
    return (
      forecastday?.map(({ date }: { date: string }) => {
        return new Date(date).getDate();
      }) || []
    );
  }, [forecastday]);
  const options = {
    xaxis: {
      categories: dates,
    },
  };
  const series = [
    {
      name: `Max temperature${temperatureId}`,
      data: temperatures.max,
    },
    {
      name: `Min temperature${temperatureId}`,
      data: temperatures.min,
    },
  ];

  return <Chart options={options} series={series} type="area" />;
};
export default WeatherCharts;
