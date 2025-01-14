import Aside from "../Aside/Aside";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";

import recipes from "../../data/recipes";
import postsData from "../../data/posts";
import "./App.scss";
import { IRecipe, IPost } from "../../@types";
import posts from "../../data/posts";

function App() {
	return (
		<div className="app">
			<Header />
			<Aside />
			<Posts posts={posts} />
		</div>
	);
}

export default App;
