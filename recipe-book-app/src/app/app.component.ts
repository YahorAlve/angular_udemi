import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showRecipe = true;

  showRecipeChange(show: boolean) {
    this.showRecipe = show;
  }

}
