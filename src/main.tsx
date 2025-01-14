import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./components/App/App.scss";
import App from "./components/App/App";

createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
