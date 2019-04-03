import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import * as fromRecipe from '../store/recipe.reducer';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // assing array type to property for typescript we can by name: type[]
  recipeState: Observable<fromRecipe.State>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromRecipe.FeatureState>) {
  }

  ngOnInit() {
    this.recipeState = this.store.select('recipes');
  }

  addNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
