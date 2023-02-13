import React from "react";

const AppContext = React.createContext<Context>({
  user: "",
  setUser: () => {},
  report: "",
  setReport: () => {},
  extra: {},
  setExtra: () => {},
});

export default AppContext;

export interface Context {
  user: any;
  setUser: any;
  report: any;
  setReport: any;
  extra: any;
  setExtra: any;
}
