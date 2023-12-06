import { useContext } from "react";
import { SearchContext } from "../providers/searchProvider";

type SearchTypes = {
  text: string;
  setText: (text: string) => void;
};

const useSearch = (): SearchTypes => {
  const { text, setText } = useContext(SearchContext);

  return {
    text,
    setText,
  };
};
export default useSearch;
