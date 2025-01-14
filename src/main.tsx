import { createRoot } from "react-dom/client";
import "./components/App/App.scss";
import App from "./components/App/App";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root") as HTMLElement).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);
