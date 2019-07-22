import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();
  @Input() index: number;
  // constructor(private recipeSrv: RecipeService) { }

  ngOnInit() {
  }

  // onSelectRecipe(recipeInput: Recipe) {
  //   this.recipeSelected.emit();
  // }
  // onSelectRecipe() {
  //   this.recipeSrv.recipeSelected.emit(this.recipe);
  // }
}