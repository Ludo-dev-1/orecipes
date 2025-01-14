export interface IPost {
	id: number;
	title: string;
	slug: string;
	thumbnail: string;
	author: string;
	difficulty: string;
	description: string;
	instructions: string;
}
export interface IIngredients {
	ingredients: [id: number, quantity: number, unit: string, name: string];
}

export interface IRecipe {
	route: string;
	label: string;
}
