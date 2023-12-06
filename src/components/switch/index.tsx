import { Switch } from "antd";
import useSwitch from "../../hooks/useSwitch";

const SwitchTemp = () => {
  const { setFormat } = useSwitch();

  const changeTheme = (value: boolean) => {
    setFormat(value ? "m" : "f");
  };
  return (
    <Switch
      onChange={changeTheme}
      checkedChildren="C°"
      unCheckedChildren="F°"
    />
  );
};
export default SwitchTemp;
