import { lazy } from "react";
import Loadable from "../components/Loadable";

const Main = Loadable(lazy(() => import("../pages/index")));
const Search = Loadable(lazy(() => import("../pages/search/index")));
const Previous = Loadable(lazy(() => import("../pages/previous/index")));

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
    {
      path: "/previous",
      element: <Previous />,
    },
  ],
};
export default ComponentsRoutes;
