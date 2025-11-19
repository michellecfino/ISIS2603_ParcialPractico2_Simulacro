import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { recipeData } from '../recipeData';
import { RecipeServiceService } from '../recipe-service.service';
import { RecipeDto } from './recipe-dto';
import { RecipeDetailDto } from './recipe-detail-dto';
@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeDto[] = [];
  selected: Boolean = false;
  selectedRecipe: RecipeDetailDto  | null = null;

  constructor(private recipeService: RecipeServiceService) {}

  ngOnInit() {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

  onSelect(recipe: RecipeDetailDto) {
    this.selectedRecipe = recipe;
    this.selected = true;
  }
}
