import React, { memo } from "react";
import Header from "../header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default memo(Layout);
