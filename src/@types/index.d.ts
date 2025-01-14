export interface IPost {
	id: number;
	title: string;
	slug: string;
	thumbnail: string;
	author: string;
	difficulty: string;
	description: string;
	instructions: string[];
	ingredients: IIngredient[];
}

export interface IIngredient {
	name: string;
	id: number;
	quantity: number;
	unit: string;
}

export interface IRecipe {
	route: string;
	label: string;
}
