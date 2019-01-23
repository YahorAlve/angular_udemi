import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

// We need to put  @Injectable() on service which will have some services injected into it
@Injectable()
export class AccountService {

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private log: LoggingService) {}

    addAccount(name: string, status: string) {
        this.accounts.push({name : name, status : status});
        this.log.logStatusChanged(status);
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.log.logStatusChanged(status);
    }

}
