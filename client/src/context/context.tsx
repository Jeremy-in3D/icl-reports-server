import React from "react";
import { Route } from "../classes/route";
import { Routes } from "../data/reports-data";

const AppContext = React.createContext<Context>({
  user: "",
  setUser: () => {},
  reports: [],
  setReports: () => {},
  extra: {},
  setExtra: () => {},
  selectedReport: "",
  setSelectedReport: () => {},
  routes: [],
  setRoutes: () => {},
  reportInstance: {},
  setReportInstance: () => {},
});

export default AppContext;

export interface Context {
  user: any;
  setUser: (user: any) => void;
  reports: any;
  setReports: (report: any) => void;
  extra: any;
  setExtra: (extra: any) => void;
  selectedReport: any;
  setSelectedReport: (selectedReport: any) => void;
  routes: Routes | undefined;
  setRoutes: (routes: any) => void;
  reportInstance: any;
  setReportInstance: (route: any) => void;
}
