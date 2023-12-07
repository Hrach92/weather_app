import React, { memo } from "react";
import styles from "./styles.module.css";

type CurrentTypes = {
  name?: string;
  country?: string;
  localtime?: string;
  temperature?: string;
  weather_descriptions?: string;
  img?: string;
};

const Current = ({
  name,
  country,
  localtime,
  temperature,
  weather_descriptions,
  img,
}: CurrentTypes): React.JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {name}, {country}
        <span>As of {localtime}</span>
      </div>
      <div
        className={styles.footer}
        style={{ backgroundImage: `url(https:${img})` }}
      >
        <span className={styles.temperature}>{temperature}°</span>
        <span className={styles.desc}>{weather_descriptions}</span>
      </div>
    </div>
  );
};
export default memo(Current);
