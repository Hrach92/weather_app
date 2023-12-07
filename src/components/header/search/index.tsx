import React, { memo, useState } from "react";
import { Input } from "antd";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useFindWeatherQuery } from "store/reducer/weather";
import useLocalStorage from "hooks/useLocalStorage";

const { Search } = Input;

const SearchComponent = ({
  setText,
  text,
}: {
  text: string;
  setText: (text: string) => void;
}): React.JSX.Element => {
  const { data } = useFindWeatherQuery(text);
  const { setWeatherData } = useLocalStorage();
  const [value, setValue] = useState("");

  const navigate = useNavigate();
  const onSearch = useCallback(
    (e: any) => {
      setWeatherData(JSON.stringify(data));
      setText(e);
      setValue("");
      navigate("/search");
    },
    [data, navigate, setText, setWeatherData]
  );

  return (
    <Search
      placeholder="Search ..."
      onSearch={onSearch}
      style={{ width: 200 }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
export default memo(SearchComponent);
