import { Component } from '@angular/core';

// export so it could be used in deferent components
// This class gonna be used like blueprint to create angular objects
@Component({
    // here is metadata which tels angular how to use this class
    // selector name should be uniuqe
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {

}
