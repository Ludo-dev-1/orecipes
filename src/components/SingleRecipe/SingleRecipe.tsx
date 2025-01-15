import { useParams } from "react-router";
import { IPost } from "../../@types";

function SingleRecipe({ recipes }: { recipes: IPost[] }) {
	const params = useParams();
	const urlSlug = params.slug;

	console.log(recipes);

	const recipeToDisplay = recipes.find((recipe) => recipe.slug === urlSlug);
	console.log(recipeToDisplay);

	if (!recipeToDisplay) {
		return <h1> Cette recette n'existe pas</h1>;
	}

	return (
		<div className="page">
			{
				// si on a pas de recette (recipeToDisplay undefined c'est qu'on est en train de loader)
				!recipeToDisplay ? (
					"...chargement"
				) : (
					<>
						<h1>{recipeToDisplay.title}</h1>
						<img src={recipeToDisplay.thumbnail} alt={recipeToDisplay.title} />
						<h2>Ingredients</h2>
						{recipeToDisplay.ingredients.map((ingredient) => (
							<li key={ingredient.id}>
								{ingredient.quantity} {ingredient.unit} {ingredient.name}
							</li>
						))}
						<h2>Instructions</h2>
						{recipeToDisplay.instructions.map((instruction) => (
							<li key={instruction}>{instruction}</li>
						))}
					</>
				)
			}
		</div>
	);
}

export default SingleRecipe;
