import { Button } from "semantic-ui-react";
import "./Header.scss";
import logo from "../../../public/logo.png";

import axios from "axios";

function Header() {
	const checkCredentials = async (email: string, password: string) => {
		// on envoie l'email et le password saisies au back pour verification des credentials
		try {
			const response = await axios.post(
				"https://orecipesapi.onrender.com/api/login",
				{
					email: email,
					password: password,
				},
			);
			console.log(response);
			// on enregistre dans le state le fait que le user soit logué isLogged
			/* 	setIsLogged(true); */

			// on voit que le serveur nous renvoie un token, c'est un JWT, il contient les infos de mon utilisateur connecté (encodé en base64 et signé)
			// on va le stocker
			//  - soit dans le state de App (faudra bien le recuperer et l'ajouter aux entetes à chaque requete privée)
			//  - soit dans l'instance axios (une fois que le token est ajouté dans l'instance axios et il envoyé à toutes les requetes)
			/* addTokenToInstance(response.data.token); */
			// et quand on voudra recuperer les recettes pref du user connecté on enverra u back une requete et on mettra dans les entetes authorization le JWT
			// le serveur il le recuperera et il verifiera que c'est un jwt authentique (avec la fonction verify de jsonwebtoken) et il nous renverra nos recettes pref
		} catch {
			console.log("error");
		}
	};

	return (
		<header className="header">
			<img src={logo} alt={logo} />
			<form
				className="mailConnection"
				onSubmit={(eventSubmit) => {
					eventSubmit.preventDefault();
					// recuperer les valeurs email et password
					// dans le formulaire
					const myForm = eventSubmit.currentTarget;
					const myFormData = new FormData(myForm);
					// Object.fromEntries transforme notre formData en un objet avec en propriétés toutes nos champs de formulaire (ça evite d'utiliser plein de fois le méthode get de notre formData , pratique si on a bcp de champs dans le form)
					const myInputsValue = Object.fromEntries(myFormData);
					const email = myInputsValue.email as string;
					const password = myInputsValue.password as string;

					// on execute notre fonction qui check le back
					// on lui envoie en param les inputValues
					checkCredentials(email, password);
				}}
			>
				<input
					type="email"
					id="input-email"
					placeholder="Adresse Email"
					name="email"
				/>
				<input
					type="password"
					id="input-Mdp"
					placeholder="Mot de passe"
					name="password"
				/>
				<Button primary type="submit">
					OK
				</Button>
			</form>
		</header>
	);
}

export default Header;
