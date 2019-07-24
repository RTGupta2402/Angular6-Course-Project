import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    // recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is simply a test', 
            'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/recipes/35/16/31/TW8kFVRNTwKckUevzMv7_sea-bass-recipe-5393.jpg',
            [
                new Ingredients('Meat',1),
                new Ingredients('French Fries', 20)
            ]),
        new Recipe(
            'Another Test Recipe', 
            'This is the description for another Test Recipe', 
            'https://static01.nyt.com/images/2015/10/07/dining/07HUMMUS/07HUMMUS-articleLarge-v2.jpg',
            [
                new Ingredients('Bread', 2),
                new Ingredients('Meat', 1)
            ])
      ];

    constructor(private shoppingListSrv: ShoppingListService) {}

    // return recipes[]
    getRecipes() {
        // returns a new array which is a copy of recipes[]
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredients[]) {
        this.shoppingListSrv.addIngredients(ingredients);
    }

}