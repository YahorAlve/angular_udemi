import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
  // removed provider and moved it to application level - cause when component was reload all data for service
  // created at component level was reset. After adding new ingredients i jsut didnt see them when come back from
  // different page - it was reset to initial array list.
})
export class RecipeBookComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
