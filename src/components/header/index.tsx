import {
  DoubleLeftOutlined,
  EnvironmentOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import SearchComponent from "./search";
import React, { memo, useCallback } from "react";
import SwitchTemp from "../switch";
import useLocalStorage from "hooks/useLocalStorage";
import { Modal } from "antd";
import useBoolean from "hooks/useBoolean";

const Header = (): React.JSX.Element => {
  const { setText, text, setLocationOn, locationOn, getData } = useSearch();
  const { getPrev } = useLocalStorage();
  const navigate = useNavigate();

  const { state, setTrue, setFalse } = useBoolean();
  const setOn = useCallback(async () => {
    setLocationOn((prev: boolean) => !prev);
    setFalse();
    if (!locationOn) {
      await getData();
      navigate("/");
    }
  }, [getData, locationOn, navigate, setFalse, setLocationOn]);

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
          <Link to="/previous" className={styles.link}>
            <DoubleLeftOutlined className={styles.prev} onClick={getPrev} />
          </Link>
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
export default memo(Header);
