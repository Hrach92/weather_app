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
    data: { location, current, request } = {
      location: {},
      current: {},
      request: {},
    },
  } = useFindWeatherQuery({ query: query || text, format: format });
  console.log(current, location, request);

  return (
    <div className={styles.container}>
      <Current
        name={location?.name}
        country={location?.country}
        localtime={location?.localtime}
        temperature={current?.temperature}
        weather_descriptions={current?.weather_descriptions?.[0]}
      />
      <Additional
        feelslike={current?.feelslike}
        humidity={current?.humidity}
        pressure={current?.pressure}
        temperature={current?.temperature}
        visibility={current?.visibility}
        wind_speed={current?.wind_speed}
      />
      <WeatherCharts data={[5, 4, 6, 7, 9, 5, 6, 2, 4, 12]} />
    </div>
  );
};
export default SearchCards;
