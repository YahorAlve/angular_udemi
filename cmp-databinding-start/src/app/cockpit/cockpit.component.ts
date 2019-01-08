import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameElement: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameElement.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(serverNameElement: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameElement.value,
      serverContent: this.newServerContent
    });
  }

}
