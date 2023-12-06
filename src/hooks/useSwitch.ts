import { useContext } from "react";
import { SwitchFormat } from "../providers/switchProvider";

type SwitchTypes = {
  format: string;
  setFormat: (text: string) => void;
};

const useSwitch = (): SwitchTypes => {
  const { format, setFormat } = useContext(SwitchFormat);

  return {
    format,
    setFormat,
  };
};
export default useSwitch;
