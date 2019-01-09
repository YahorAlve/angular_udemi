import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements = [{name: 'My Server', type: 'server', content: 'Just a Test'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }

  /* That method was introduced to show how life hook ngOnChanges works. The hook will trigger if the value has changed.
     That is why we introduced property name in server-element-component - because if we keep using object serverElement
     and just name of object changes the object (reference to it) doesn't change and it is considered as no changes are made.
     But if we use string (looks it is primitive baset on trainer) it will be changed and refernce will be changed - so change.
     First time ngOnChanges called before ngOnInit :
      currentValue: {name: "My Server", type: "server", content: "Just a Test"}
      firstChange: true
      previousValue: undefined
     Then after that method is called Result change was detected :
      elementName: SimpleChange
      currentValue: "Changed!"
      firstChange: false
      previousValue: "My Server"
      Example of use we can store old values in case we want to save them and so on...
  */
  onFirstChange() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

}
