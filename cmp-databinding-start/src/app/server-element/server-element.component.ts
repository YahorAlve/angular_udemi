import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None - will aply component CSS file globaly to all elements even though they have angular attributes
  // Emulated is default
  // Native will be behaviour like for emulated but only for browsers which support it
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element: {name: string, type: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
