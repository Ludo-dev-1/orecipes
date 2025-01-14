import axios from "axios";

import Aside from "../Aside/Aside";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";

import "./App.scss";

import { useEffect, useState } from "react";
import { IPost } from "../../@types";
import { Route, Routes, useParams } from "react-router";
import SingleRecipe from "../SingleRecipe/SingleRecipe";

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
			} catch (error) {}
		};
		fetchRecipes();
	}, []);

	return (
		<div className="app">
			<Header />
			<Aside recipeFetch={recipes} />

			<Routes>
				<Route path="/" element={<Posts posts={recipes} />} />

				<Route
					path="recipe/:slug"
					element={<SingleRecipe recipes={recipes} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
