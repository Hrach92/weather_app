import React from "react";
import styles from "./styles.module.css";

type AdditionalTypes = {
  feelslike?: string;
  humidity?: string;
  pressure?: string;
  temperature?: string;
  visibility?: string;
  wind_speed?: string;
};

const Additional = ({
  feelslike,
  humidity,
  pressure,
  temperature,
  visibility,
  wind_speed,
}: AdditionalTypes): React.JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.feels}>Feels like</span>
        <span className={styles.temp}>{feelslike}°</span>
      </div>
      <div className={styles.item}>
        <span className={styles.text1}>Max/Min</span>
        <span className={styles.text2}>--/{temperature}°</span>
      </div>
      <div className={styles.item}>
        <span className={styles.text1}>Wind</span>
        <span className={styles.text2}>{wind_speed} km/h</span>
      </div>
      <div className={styles.item}>
        <span className={styles.text1}>Humidity</span>
        <span className={styles.text2}>{humidity}%</span>
      </div>
      <div className={styles.item}>
        <span className={styles.text1}>Pressure</span>
        <span className={styles.text2}>{pressure}mbar</span>
      </div>
      <div className={styles.item}>
        <span className={styles.text1}>Visibility</span>
        <span className={styles.text2}>{visibility}km</span>
      </div>
    </div>
  );
};
export default Additional;
