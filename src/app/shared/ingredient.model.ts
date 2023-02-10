export class Ingredient {

  constructor( public name: string, public amount: number) {}
}

// this is a shortcut, behind the scenes TS creates the same effect as recipe.model and automatically assign the properties
// the values that are needed
