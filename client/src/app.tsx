import React, { lazy, Suspense, useRef, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Loading } from "./components/loading";
import { Login } from "./components/login";
import { Report } from "./components/report/report";
import AppContext from "./context/context";
import { Routes as MachineRoutes } from "./data/reports-data";
import { TopBar } from "./components/misc/top-bar";
import { Search } from "./components/search/search";
import { StatusScreen } from "./components/status-screen";

// {
//   name: "גרמי",
//   username: "jwes@in3d-tech.com",
// }
const Content = lazy(() =>
  import("./content").then((module) => ({ default: module.Content }))
);

export const App: React.FC = () => {
  const [user, setUser] = useState<User | null>({
    name: "גרמי",
    username: "jwes@in3d-tech.com",
  });
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState();
  const [extra, setExtra] = useState({});
  const [routes, setRoutes] = useState<MachineRoutes | undefined>();
  const [reportInstance, setReportInstance] = useState();
  const [showScreen, setShowScreen] = useState("home");

  const accessToken = useRef<string>();

  const context = {
    user,
    setUser,
    reports,
    setReports,
    extra,
    setExtra,
    selectedReport,
    setSelectedReport,
    routes,
    setRoutes,
    reportInstance,
    setReportInstance,
  };

  return (
    <div className="app">
      <AppContext.Provider value={context}>
        <Router>
          <TopBar
            setScreen={setShowScreen}
            user={user}
            displayedScreen={showScreen}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loading />}>
                  {user ? <Content /> : <Login tokenRef={accessToken} />}
                </Suspense>
              }
            />
            <Route
              path="/reports"
              element={
                <Suspense fallback={<Loading />}>
                  <Report />
                </Suspense>
              }
            />
            <Route
              path="/search-reports"
              element={
                <Suspense fallback={<Loading />}>
                  <Search />
                </Suspense>
              }
            />
            <Route
              path="/alerts"
              element={
                <Suspense fallback={<Loading />}>
                  <StatusScreen />
                </Suspense>
              }
            />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
};

export interface User {
  name: string;
  username: string;
}
