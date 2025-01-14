import { IPost } from "../../@types";
import Post from "../Post/Post";

import "../App/App.scss";

interface PostsProps {
	posts: IPost[];
}

function Posts({ posts }: PostsProps) {
	return (
		<main className="">
			<h1>Les recettes oRecipes</h1>
			<p>Voici nos 6 recettes</p>
			<div className="posts-list">
				{posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</div>
		</main>
	);
}

export default Posts;
