import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { RecipeDetailDto } from './recipe-list/recipe-detail-dto';
import { RecipeDto } from './recipe-list/recipe-dto';
import { Recipe } from './Recipe';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  private apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getRecipes(): Observable<RecipeDto[]> {
    return this.http.get<RecipeDto[]>(this.apiUrl);
  }
  getRecipeDetail(id: number): Observable<RecipeDetailDto> {
    return this.http.get<RecipeDetailDto[]>(this.apiUrl).pipe(
      map((recipes: RecipeDetailDto[]) =>
        recipes.find(r => r.id === id)!
      )
    );
  }

}
