import "../Aside/Aside.scss";

function Aside({ recipeFetch }) {
	return (
		<aside className="menu" id="aside">
			<nav>
				{recipeFetch.map((recipes) => (
					<a
						/* className={
							filterValue.toUpperCase() === recipes.label.toUpperCase()
						} */
						href={recipes.slug}
						key={recipes.title}
					>
						{recipes.title}
					</a>
				))}
			</nav>
		</aside>
	);
}

export default Aside;
