import React from "react";

const AppContext = React.createContext<Context>({
  user: "",
  setUser: () => {},
  reports: [],
  setReports: () => {},
  extra: {},
  setExtra: () => {},
  selectedReport: "",
  setSelectedReport: () => {},
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
}
