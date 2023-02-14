import React from "react";

const AppContext = React.createContext<Context>({
  user: "",
  setUser: () => {},
  reports: [],
  setReports: () => {},
  extra: {},
  setExtra: () => {},
});

export default AppContext;

export interface Context {
  user: any;
  setUser: any;
  reports: any;
  setReports: any;
  extra: any;
  setExtra: any;
}
