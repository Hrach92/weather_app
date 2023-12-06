import React from "react";
import { Input } from "antd";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

const SearchComponent = ({
  setText,
}: {
  setText: (text: string) => void;
}): React.JSX.Element => {
  const navigate = useNavigate();
  const onSearch = useCallback(
    (e: any) => {
      setText(e);
      navigate("/search");
    },
    [navigate, setText]
  );

  return (
    <Search
      placeholder="Search ..."
      onSearch={onSearch}
      style={{ width: 200 }}
    />
  );
};
export default SearchComponent;
