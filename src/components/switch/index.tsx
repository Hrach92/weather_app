import { Switch } from "antd";
import useSwitch from "../../hooks/useSwitch";

const SwitchTemp = () => {
  const { setFormat } = useSwitch();

  const changeTheme = (value: boolean) => {
    setFormat(value ? "f" : "m");
  };

  return (
    <Switch
      onChange={changeTheme}
      checkedChildren="F°"
      unCheckedChildren="C°"
    />
  );
};
export default SwitchTemp;
