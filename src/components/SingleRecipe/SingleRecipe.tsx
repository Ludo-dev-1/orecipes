import { useParams } from "react-router";
import { IPost } from "../../@types";

function SingleRecipe({
	recipes,
}: {
	recipes: IPost[];
}) {
	const params = useParams();
	const urlSlug = params.slug;

	console.log(recipes);

	const recipeToDisplay = recipes.find((recipe) => recipe.slug === urlSlug);
	console.log(recipeToDisplay);

	if (!recipeToDisplay) {
		return <h1> Cette recette n'existe pas</h1>;
	}

	return (
		<div>
			<h1> {recipeToDisplay.title}</h1>
			{/* <ul>
				{recipeToDisplay.map((recipe) => {
					<li>{recipe.ingredients}</li>;
				})}
			</ul> */}
			<p> </p>
		</div>
	);
}

export default SingleRecipe;
