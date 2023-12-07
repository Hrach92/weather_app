import { createContext, useEffect, useMemo, useState } from "react";
import React from "react";

export const SearchContext = createContext({
  text: "",
  locationOn: false,
  setText: (text: string) => {},
  setLocationOn: (switched: ((item: boolean) => boolean) | boolean) => {},
});

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [text, setText] = useState<string>("");
  const [locationOn, setLocationOn] = useState<boolean>(false);

  useEffect(() => {
    setText("Yerevan");
  }, [setText]);

  const value = useMemo(() => {
    return { text, locationOn, setText, setLocationOn };
  }, [locationOn, text]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
export default SearchProvider;
