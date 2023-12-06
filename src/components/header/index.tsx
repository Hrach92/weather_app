import { HomeOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import SearchComponent from "./search";
import React from "react";
import SwitchTemp from "../switch";

const Header = (): React.JSX.Element => {
  const { setText } = useSearch();

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Link to="/">
          <HomeOutlined className={styles.icon} onClick={() => setText("")} />
        </Link>
        <SwitchTemp />
      </div>
      <SearchComponent setText={setText} />
    </div>
  );
};
export default Header;
