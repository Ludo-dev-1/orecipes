import { Button } from "semantic-ui-react";
import "./Header.scss";

function Header() {
	return (
		<header className="header">
			<img src="front_docs/logo.png" alt="logo" />
			<form
				className="mailConnection"
				onSubmit={(eventSubmit) => {
					eventSubmit.preventDefault();

					const formData = new FormData(eventSubmit.currentTarget);

					const email = formData.get("email") as string;
					console.log(email);
				}}
			>
				<input
					type="text"
					id="input-email"
					placeholder="Adresse Email"
					name="email"
				/>
				<input
					type="text"
					id="input-Mdp"
					placeholder="Mot de passe"
					name="Mdp"
				/>
				<Button primary type="submit">
					OK
				</Button>
			</form>
		</header>
	);
}

export default Header;
