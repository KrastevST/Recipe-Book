import { Injectable, EventEmitter } from '@angular/core'

import { Recipe } from './recipe.model'

@Injectable({providedIn: 'root'})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()
  
  private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://pinchofyum.com/wp-content/uploads/Lo-Mein-Recipe.jpg'),
    new Recipe('Another test Recipe', 'This is simply a test', 'https://pinchofyum.com/wp-content/uploads/Lo-Mein-Recipe.jpg')
  ]

  getRecipes() {
    return this.recipes.slice()
  }
}