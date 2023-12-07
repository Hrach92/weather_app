import React from "react";
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
    },
  } = useFindWeatherQuery(query || text);

  return (
    <div className={styles.container}>
      <Current
        name={location?.name}
        country={location?.country}
        localtime={location?.localtime}
        temperature={format === "m" ? current?.temp_c : current?.temp_f}
        weather_descriptions={current?.condition?.["text"]}
        img={current?.condition?.["icon"].slice(2)}
      />
      <Additional
        feelslike={current?.feelslike}
        humidity={current?.humidity}
        pressure={current?.pressure_mb}
        temperature={format === "m" ? current?.temp_c : current?.temp_f}
        visibility={current?.vis_km}
        wind_speed={current?.wind_kph}
      />
      <WeatherCharts data={[5, 4, 6, 7, 9, 5, 6, 2, 4, 12]} />
    </div>
  );
};
export default SearchCards;
