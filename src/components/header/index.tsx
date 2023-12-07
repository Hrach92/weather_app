import {
  DoubleLeftOutlined,
  EnvironmentOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import SearchComponent from "./search";
import React, { useCallback } from "react";
import SwitchTemp from "../switch";
import useLocalStorage from "hooks/useLocalStorage";
import { Modal } from "antd";
import useBoolean from "hooks/useBoolean";

const Header = (): React.JSX.Element => {
  const { setText, text, setLocationOn, locationOn } = useSearch();
  const { getPrev } = useLocalStorage();

  const { state, setTrue, setFalse } = useBoolean();
  const setOn = useCallback(() => {
    setLocationOn((prev: boolean) => !prev);
    setFalse();
  }, [setFalse, setLocationOn]);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Link to="/">
            <HomeOutlined
              className={styles.icon}
              onClick={() => setText("Yerevan")}
            />
          </Link>
          <SwitchTemp />
          <EnvironmentOutlined onClick={setTrue} />
          <DoubleLeftOutlined className={styles.prev} onClick={getPrev} />
        </div>
        <SearchComponent setText={setText} text={text} />
      </div>
      <Modal
        title={
          locationOn
            ? "Are you sure you want to disable location data?"
            : "Are you sure you want to enable location data?"
        }
        open={state}
        onOk={setOn}
        onCancel={setFalse}
      ></Modal>
    </>
  );
};
export default Header;
