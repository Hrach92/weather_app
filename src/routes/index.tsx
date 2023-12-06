import { useRoutes } from "react-router-dom";
import ComponentsRoutes from "./ComponentsRoutes";
import Layout from "components/layout";

export default function ThemeRoutes() {
  return <Layout>{useRoutes([ComponentsRoutes])}</Layout>;
}
