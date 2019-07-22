import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  // Recipe service initiates the array.
  // recipes: Recipe[] = [
  //   new Recipe('A Test Recipe', 'This is simply a test', 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/recipes/35/16/31/TW8kFVRNTwKckUevzMv7_sea-bass-recipe-5393.jpg'),
  //   new Recipe('Another Test Recipe', 'This is the description for another Test Recipe', 'https://static01.nyt.com/images/2015/10/07/dining/07HUMMUS/07HUMMUS-articleLarge-v2.jpg')
  // ];

  constructor(private recipeSrv: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.recipes = this.recipeSrv.getRecipes();
  }

  // onSelectedRecipe(recipeInput: Recipe) {
  //   this.recipeWasSelected.emit(recipeInput);
  // }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
