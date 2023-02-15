import React, { lazy, Suspense, useRef, useState } from "react";
import { Loading } from "./components/loading";
import { Login } from "./components/login";
import AppContext from "./context/context";

const Content = lazy(() =>
  import("./content").then((module) => ({ default: module.Content }))
);

export const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [reports, setReports] = useState([]);
  const [extra, setExtra] = useState();

  const accessToken = useRef<string>();

  return (
    <div className="app">
      <AppContext.Provider
        value={{ user, setUser, reports, setReports, extra, setExtra }}
      >
        <Suspense fallback={<Loading />}>
          {user ? <Content /> : <Login tokenRef={accessToken} />}
        </Suspense>
      </AppContext.Provider>
    </div>
  );
};

interface User {
  name: string;
  username: string;
}
