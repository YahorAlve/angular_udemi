import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(// private log: LoggingService,
              private accountService: AccountService) {}

  onSetTo(status: string) {
    // this.log.logStatusChanged(status);
    this.accountService.updateStatus(this.id, status);
  }
}
