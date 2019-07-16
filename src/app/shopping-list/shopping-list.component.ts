import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // providers: [ShoppingListService] because we need to access the service in recipe as well.
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredients[];
  // ingredients: Ingredients[] = [
  //   new Ingredients('Test Ingredient', 2),
  //   new Ingredients('Test Ingredient 2', 3)
  // ];

  constructor(private shoppingListSrv: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListSrv.getIngredients();
    this.shoppingListSrv.ingredientAdded.subscribe(
      (ingredients: Ingredients[]) => {
        this.ingredients = ingredients;
      }
    )     
  }

  // onIngredientAdded(ingredientData: Ingredients) {
  //   this.ingredients.push(ingredientData);
  // }
}
