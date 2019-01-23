import { Component} from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // if we put here service we tell angular create new service for this module and each child of this component
  // in case child component doesn't declare its own service instance (object)
  // after we removed AccountService we started using appComponent AccountService instance and appliaction will work fine
  // as we will add accounts in the object appCOmponent pointed to and uses for reading values
  providers: [LoggingService]
})
export class NewAccountComponent {

  // right way to inject services into componenet through constructor - ang will take care for injecting the service
  constructor(private log: LoggingService,
              private accountService: AccountService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.log.logStatusChanged(accountStatus);
    this.accountService.addAccount(accountName, accountStatus);
  }
}
