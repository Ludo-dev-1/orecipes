import { createRoot } from "react-dom/client";
import "./components/App/App.scss";
import App from "./components/App/App";
import { BrowserRouter } from "react-router";

// impporter le style des composants de semantic ui
import "semantic-ui-css/semantic.min.css";
// import du reset
import "./styles/reset.scss";

createRoot(document.getElementById("root") as HTMLElement).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);
