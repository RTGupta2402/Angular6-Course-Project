import { Ingredients } from './../shared/ingredients.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientAdded = new EventEmitter<Ingredients[]>();

    private ingredients: Ingredients[] = [
        new Ingredients('Test Ingredient', 2),
        new Ingredients('Test Ingredient 2', 3)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredients){
        this.ingredients.push(ingredient);
        //emit an event to pass the new ingredients array copy to the shopping-list component.
        this.ingredientAdded.emit(this.ingredients.slice());
    }
    
    addIngredients(ingredients: Ingredients[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientAdded.emit(this.ingredients.slice())
    }
}