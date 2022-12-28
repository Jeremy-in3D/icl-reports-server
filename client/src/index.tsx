import * as ReactDOMClient from "react-dom/client";
import { App } from "./app";
import "./styles/index.css";

const container = document.getElementById("root") as HTMLDivElement;
const root = ReactDOMClient.createRoot(container);

root.render(<App />);
