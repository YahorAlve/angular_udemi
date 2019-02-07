import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-please-select',
  templateUrl: './please-select.component.html',
  styleUrls: ['./please-select.component.css']
})
export class PleaseSelectComponent implements OnInit {

  selection: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.selection = data['selection'];
      }
    );
  }

}
