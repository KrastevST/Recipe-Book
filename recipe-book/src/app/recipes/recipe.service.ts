import { Injectable, EventEmitter } from '@angular/core'

import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'

@Injectable({providedIn: 'root'})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()
  
  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Soup with Nettle',
      'Tasty chicken soup with nettle and yoghurt',
      'https://pinchofyum.com/wp-content/uploads/Lemon-Chicken-Soup-Square.jpg',
     [
       new Ingredient('Chicken', 1),
       new Ingredient('Yoghurt', 1),
       new Ingredient('Egg', 3),
       new Ingredient('Nettle', 1),
       new Ingredient('Lemon', 1),
       new Ingredient('Carrot', 4),
       new Ingredient('Potatoe', 3),
       new Ingredient('Rice', 1),
       new Ingredient('Onion', 2),
     ]), 
    new Recipe(
      'Rice Fried Chicken',
      'Chicken meat with rice and veggies',
      'https://www.tasteofhome.com/wp-content/uploads/2018/05/Brown-Rice-Salad-with-Grilled-Chicken_exps16302_CX1995537B04_08_1b_RMS-696x696.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Carrot', 3),
        new Ingredient('Rice', 1),
        new Ingredient('Onion', 2),
        new Ingredient('Peas', 1),
      ]),
  ]

  constructor(private slService: ShoppingListService) {}
  
  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)
  }
}