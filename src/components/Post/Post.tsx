import { IPost } from "../../@types";
import "../App/App.scss";

interface PostProps {
	post: IPost;
}

// rôle : afficher un article
function Post({ post }: PostProps) {
	return (
		<article className="post">
			<img src={post.thumbnail} alt="" />
			<h2 className="post-title">{post.title}</h2>
			<div className="post-difficulty">Difficulté: {post.difficulty}</div>
			<a href="#" className="see-post">
				Voir la recette
			</a>
		</article>
	);
}

export default Post;
