import React, { memo } from "react";
import styles from "./styles.module.css";
import useSearch from "../../hooks/useSearch";
import { useFindWeatherQuery } from "../../store/reducer/weather";
import Current from "./current";
import Additional from "./additional";
import WeatherCharts from "./charts";
import useSwitch from "../../hooks/useSwitch";

const SearchCards = ({ query }: { query?: string }): React.JSX.Element => {
  const { text } = useSearch();
  const { format } = useSwitch();
  const {
    data: { location, current } = {
      location: {},
      current: {},
    } || {},
  } = useFindWeatherQuery(query || text);

  const temp = format === "m" ? current?.temp_c : current?.temp_f;

  return (
    <div className={styles.container}>
      <Current
        name={location?.name}
        country={location?.country}
        localtime={location?.localtime}
        temperature={temp}
        weather_descriptions={current?.condition?.["text"]}
        img={current?.condition?.["icon"].slice(2)}
      />
      <Additional
        feelslike={temp}
        humidity={current?.humidity}
        pressure={current?.pressure_mb}
        temperature={temp}
        visibility={current?.vis_km}
        wind_speed={current?.wind_kph}
      />
      <WeatherCharts />
    </div>
  );
};
export default memo(SearchCards);
