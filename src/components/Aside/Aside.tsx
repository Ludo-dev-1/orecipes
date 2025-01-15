import { IPost } from "../../@types";
import "../Aside/Aside.scss";

function Aside({ recipeFetch }: { recipeFetch: IPost[] }) {
	return (
		<aside className="menu" id="aside">
			<nav>
				{recipeFetch.map((recipes) => (
					<li key={recipes.title}>{recipes.title}</li>
				))}
			</nav>
		</aside>
	);
}

export default Aside;
