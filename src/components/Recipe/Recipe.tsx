import { Link } from "react-router";
import { IPost } from "../../@types";
import "../App/App.scss";

interface PostProps {
	post: IPost;
}

// rôle : afficher un article
function Recipe({ post }: PostProps) {
	return (
		<article className="post">
			<img src={post.thumbnail} alt="" />
			<h2 className="post-title">{post.title}</h2>
			<div className="post-difficulty">Difficulté: {post.difficulty}</div>
			<Link to={`recipe/${post.slug}`} className="see-post">
				Voir la recette
			</Link>
		</article>
	);
}

export default Recipe;
