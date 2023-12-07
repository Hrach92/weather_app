import React, { useEffect, useRef } from "react";
import SearchCards from "../components/searchCards";
import useLocalSorage from "hooks/useLocalStorage";
import { useFindWeatherQuery } from "store/reducer/weather";
import useSearch from "hooks/useSearch";

const Main = (): React.JSX.Element => {
  const ref = useRef("false");
  const { setWeatherData } = useLocalSorage();
  const { text } = useSearch();

  const { data } = useFindWeatherQuery({ query: text });

  useEffect(() => {
    if (ref.current === "true") {
      setWeatherData(JSON.stringify(data));
      ref.current = "none";
    } else {
      ref.current = "true";
    }
    return () => {};
  }, [data, setWeatherData]);

  useEffect(() => {}, []);
  return <SearchCards query="Yerevan" />;
};
export default Main;
