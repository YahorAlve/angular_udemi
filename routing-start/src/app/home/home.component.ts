import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // this will build http://localhost:4200/servers/1/edit?allowEdit=1#loading url, now it is a bit more dynamically cause
  // we can pass id in url. ANd also it will still map it to Edit server component as this full url contains route calimed
  // in app module servers/:id/edit
  onServerAdded(id: number) {
    // some logic
    this.router.navigate(['/servers', id, 'edit'], {queryParams : {allowEdit : '1'}, fragment : 'loading'});
  }

}
