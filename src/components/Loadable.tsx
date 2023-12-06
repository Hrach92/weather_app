import React, { Suspense } from "react";

const Loadable = (Component: React.ElementType) => (props: any) =>
  (
    <Suspense fallback={"loading.."}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
