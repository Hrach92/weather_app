import { createContext, useMemo, useState } from "react";
import React from "react";

export const SwitchFormat = createContext({
  format: "",
  setFormat: (text: string) => {},
});

const SwitchProvider = ({ children }: { children: React.ReactNode }) => {
  const [format, setFormat] = useState<string>("m");

  const value = useMemo(() => {
    return { format, setFormat };
  }, [format]);

  return (
    <SwitchFormat.Provider value={value}>{children}</SwitchFormat.Provider>
  );
};
export default SwitchProvider;
