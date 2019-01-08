import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  /*
  Another approach to reach HTML elment from DOM using angular is through ElementRef in ts code using
  ViewCHild decorator. That will not be HTMLInputElement - it is going to be ElmentRef element wich is
  Angular object core object - but through it we can access native element. It is strongly recommende do
  not modify value of native dom element through directly accessing it through angular like this :
  this.serverContentElement.nativeElement.value = 'something' cause it is actlialy anti-pattern and could 
  lead to bad consecuences.
   */
  @ViewChild('serverContentElement') serverContentElement: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameElement: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameElement.value,
      serverContent: this.serverContentElement.nativeElement.value
    });
  }

  onAddBlueprint(serverNameElement: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameElement.value,
      serverContent: this.serverContentElement.nativeElement.value
    });
  }

}
