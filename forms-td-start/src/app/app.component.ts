import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /* We can use ViewChild to get access to ngForm - and mentor mentioned that is even better to use as we
  are not providing this form as an argument through submit(), so it is especially important when we need to
  get access to ngForm before actially submitting the form  */
  @ViewChild('form') form: NgForm;

  defaultOption = 'pet';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  /* onSubmit(form: NgForm) {
    console.log('Submitted!');
    console.log(form);
  } */

  onSubmit() {
    console.log('Submitted!');
    console.log(this.form);
  }

}
