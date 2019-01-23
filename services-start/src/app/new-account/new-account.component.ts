import { Component} from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountService]
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
