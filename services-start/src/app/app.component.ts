import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit {

  accounts: {name: string, status: string} [] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    // here we are getting reference to the same array object (so two references point to the same object)
    this.accounts = this.accountService.accounts;
  }
}
