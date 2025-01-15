import { Link } from "react-router";
import { IPost } from "../../@types";
import "../Aside/Aside.scss";

function Aside({ recipeFetch }: { recipeFetch: IPost[] }) {
	return (
		<aside className="menu" id="aside">
			<nav>
				<li>
					<Link to="/"> Accueil </Link>
				</li>
				{recipeFetch.map((recipes) => (
					<li key={recipes.title}>
						<Link to={`/recipe/${recipes.slug}`}>{recipes.title}</Link>
					</li>
				))}
			</nav>
		</aside>
	);
}

export default Aside;
