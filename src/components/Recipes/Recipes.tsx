import { IPost } from "../../@types";

import { Button, Card, CardGroup } from "semantic-ui-react";

import "./Recipes.scss";
import { Link } from "react-router";

interface IRecipes {
	recipes: IPost[];
}

function Recipes({ recipes }: IRecipes) {
	return (
		<main className="page">
			<h1>Les recettes</h1>
			<p>Voici nos 6 recettes</p>

			<CardGroup itemsPerRow={2}>
				{recipes.map((recipe) => (
					<Card
						key={recipe.id}
						image={recipe.thumbnail}
						header={recipe.title}
						meta={recipe.difficulty}
						description={
							<Link to={`/recipe/${recipe.slug}`}>
								<Button primary>Voir la recette</Button>
							</Link>
						}
					/>
				))}
			</CardGroup>
		</main>
	);
}

export default Recipes;
