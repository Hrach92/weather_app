import { useCallback, useContext, useEffect, useState } from "react";
import { SearchContext } from "../providers/searchProvider";
import { useFindByIpQuery } from "store/reducer/weather";
import axios from "axios";

type SearchTypes = {
  text: string;
  locationOn: boolean;
  setLocationOn: (switched: ((item: boolean) => boolean) | boolean) => void;
  setText: (text: string) => void;
};

const useSearch = (): SearchTypes => {
  const { text, setText, locationOn, setLocationOn } =
    useContext(SearchContext);
  const [ip, setIP] = useState("");

  const { data: { location } = { location: {} } } = useFindByIpQuery(ip);
  const getData = useCallback(async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    setIP(res.data.ip);
    setLocationOn((prev) => !prev);
  }, [setLocationOn]);

  useEffect(() => {
    if (!locationOn) {
      getData();
      setText(location?.name);
    }
  }, [location?.name, getData, setText]);
  console.log(location, location?.name, locationOn, 4545, ip);

  return {
    text,
    locationOn,
    setText,
    setLocationOn,
  };
};
export default useSearch;
