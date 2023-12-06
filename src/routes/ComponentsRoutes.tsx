import { lazy } from "react";
import Loadable from "../components/Loadable";

const Main = Loadable(lazy(() => import("../pages/index")));
const Search = Loadable(lazy(() => import("../pages/search/index")));

const ComponentsRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/search",
      element: <Search />,
    },
  ],
};
export default ComponentsRoutes;
