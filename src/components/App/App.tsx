import axios from "axios";

import Aside from "../Aside/Aside";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";

import "./App.scss";

import { useEffect, useState } from "react";
import { IPost } from "../../@types";

function App() {
	//STATE pour afficher les recettes
	const [recipes, setRecipes] = useState<null | IPost[]>([]);

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
			<Aside />
			<Posts posts={recipes} />
		</div>
	);
}

export default App;
