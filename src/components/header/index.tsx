import { DoubleLeftOutlined, HomeOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import SearchComponent from "./search";
import React from "react";
import SwitchTemp from "../switch";
import useLocalSorage from "hooks/useLocalStorage";

const Header = (): React.JSX.Element => {
  const { setText } = useSearch();
  const { getPrev } = useLocalSorage();

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Link to="/">
          <HomeOutlined
            className={styles.icon}
            onClick={() => setText("Yerevan")}
          />
        </Link>
        <SwitchTemp />
        <DoubleLeftOutlined className={styles.prev} onClick={getPrev} />
      </div>
      <SearchComponent setText={setText} />
    </div>
  );
};
export default Header;
