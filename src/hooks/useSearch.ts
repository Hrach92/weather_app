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

  const { data: { location } = { location: {} } || {} } = useFindByIpQuery(ip);

  const getData = useCallback(async () => {
    try {
      const res = await axios.get("https://api.ipify.org/?format=json");
      setIP(res.data.ip);
      setLocationOn((prev) => !prev);
    } catch (err: any) {
      console.log(err.message);
    }
  }, [setLocationOn]);

  useEffect(() => {
    if (locationOn) {
      getData();
    } else if (ip) {
      setText(location?.name);
    }
    console.log(111);

    return () => {};
  }, [location?.name, getData, setText, locationOn, ip]);

  return {
    text,
    locationOn,
    setText,
    setLocationOn,
  };
};
export default useSearch;
