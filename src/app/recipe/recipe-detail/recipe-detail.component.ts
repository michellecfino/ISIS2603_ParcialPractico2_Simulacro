import { Component, Input, OnInit } from '@angular/core';
import { RecipeDetailDto } from '../recipe-list/recipe-detail-dto';
import { RecipeServiceService } from '../recipe-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: any;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeServiceService) {
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.recipeService.getRecipeDetail(id).subscribe((data) => {
        this.recipe = data;
      });
    }
  }
}