import React, { lazy, Suspense, useRef, useState } from "react";
import { Loading } from "./components/loading";
import { Login } from "./components/login";
import AppContext from "./context/context";

const Content = lazy(() =>
  import("./content").then((module) => ({ default: module.Content }))
);

export const App: React.FC = () => {
  const [authorized, setAuthorized] = useState<boolean>(true);
  const [user, setUser] = useState(false);
  const [reports, setReports] = useState([]);
  const [extra, setExtra] = useState();

  const accessToken = useRef<string>();

  return (
    <div className="app">
      <AppContext.Provider
        value={{ user, setUser, reports, setReports, extra, setExtra }}
      >
        <Suspense fallback={<Loading />}>
          {authorized ? (
            <Content />
          ) : (
            <Login setAuthorized={setAuthorized} tokenRef={accessToken} />
          )}
        </Suspense>
      </AppContext.Provider>
    </div>
  );
};
