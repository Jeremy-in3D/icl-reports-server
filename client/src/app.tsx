import React, { lazy, Suspense, useRef, useState } from "react";
import { Loading } from "./components/loading";
import { Login } from "./components/login";

const Content = lazy(() =>
  import("./content").then((module) => ({ default: module.Content }))
);

export const App: React.FC = () => {
  const [authorized, setAuthorized] = useState(false);
  const accessToken = useRef<string>();

  return (
    <div className="app">
      <Suspense fallback={<Loading />}>
        {authorized ? (
          <Content />
        ) : (
          <Login setAuthorized={setAuthorized} tokenRef={accessToken} />
        )}
      </Suspense>
    </div>
  );
};
