import { useCallback, useEffect, useState } from "react";
import useSearch from "./useSearch";

type StorageTypes = {
  weatherData: string;
  setWeatherData: (text: string) => void;
  getPrev: () => void;
};
const useLocalSorage = (): StorageTypes => {
  const [weatherData, setWeatherData] = useState("");
  const { setText } = useSearch();
  useEffect(() => {
    console.log(111);

    localStorage.setItem("weather", `${weatherData}`);
  }, [weatherData]);

  const getPrev = useCallback(() => {
    const weatherFromStorage = localStorage.getItem("weather") ?? "";
    if (weatherFromStorage) {
      const parsed = JSON.parse(weatherFromStorage);
      setText(parsed.location.name);
    }
  }, [setText]);

  return {
    weatherData,
    setWeatherData,
    getPrev,
  };
};

export default useLocalSorage;
