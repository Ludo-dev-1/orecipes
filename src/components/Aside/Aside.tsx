import "../Aside/Aside.scss";
import recipes from "../../data/recipes";

function Aside() {
	return (
		<aside className="menu" id="aside">
			<nav>
				{recipes.map((recipes) => (
					<a
						/* className={
							filterValue.toUpperCase() === recipes.label.toUpperCase()
						} */
						href={recipes.route}
						key={recipes.label}
					>
						{recipes.label}
					</a>
				))}
			</nav>
		</aside>
	);
}

export default Aside;
