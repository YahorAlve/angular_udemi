import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errorMessage: string;

  constructor(private route: ActivatedRoute) {
    // way to consume static data
    this.errorMessage = this.route.snapshot.data['message'];
    // another alsmos the same way just in case that message can change some how
    this.route.data
            .subscribe(
              (data: Data) => {
                this.errorMessage = data['message'];
              }
            );
  }

  ngOnInit() {
  }

}
