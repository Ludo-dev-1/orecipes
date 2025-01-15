import axios from "axios";

import Aside from "../Aside/Aside";
import Header from "../Header/Header";

import "./App.scss";

import { useEffect, useState } from "react";
import { IPost } from "../../@types";
import { Route, Routes } from "react-router";
import SingleRecipe from "../SingleRecipe/SingleRecipe";
import Recipes from "../Recipes/Recipes";

function App() {
	//STATE pour afficher les recettes
	const [recipes, setRecipes] = useState<IPost[]>([]);

	useEffect(() => {
		const fetchRecipes = async () => {
			try {
				const response = await axios.get(
					"https://orecipesapi.onrender.com/api/recipes",
				);
				console.log(response);
				setRecipes(response.data);
			} catch (error) {
				console.log("erreur de fetch des recettes");
			}
		};
		fetchRecipes();
	}, []);

	return (
		<div className="app">
			<div className="aside">
				<Aside recipeFetch={recipes} />
			</div>
			<div className="rightbloc">
				<Header />
				<Routes>
					<Route path="/" element={<Recipes recipes={recipes} />} />
					<Route
						path="recipe/:slug"
						element={<SingleRecipe recipes={recipes} />}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
