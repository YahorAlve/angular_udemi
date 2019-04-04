import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromApp from '../../store/app.reducer';
import * as fromAuth from '../../auth/store/auth.reducer';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipe-book/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: HttpEvent<Object>) => {
          // we can a few httpEventTypes which some times could be handy for doing some ui logic and new client with
          // observ 'events' provide us with this opportunity
          // console.log(response.type === HttpEventType.Sent);
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogOut() {
    this.store.dispatch(new AuthActions.LogOut());
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }


}
