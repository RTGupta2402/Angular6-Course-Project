import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ErrorComponent } from './error/error.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


const routes: Routes = [
  //pathMatch 'full' overides the default of 'prefix' and tells angular to redirect only if full path is empty.
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes',
    component: RecipesComponent, 
    children: [
      { path: '', component: ErrorComponent, data: {message: 'Please select a recipe!'}},
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent }
    ]},
  { path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
