import { createContext, useMemo, useState } from "react";
import React from "react";

export const SearchContext = createContext({
  text: "",
  setText: (text: string) => {},
});

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [text, setText] = useState<string>("Yerevan");

  const value = useMemo(() => {
    return { text, setText };
  }, [text]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
export default SearchProvider;
