import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];

  /* In TD approach we had NgFrom wich angular papulated automatically and NgForm is actially wrapper to FormGroup
     and FormGroup it is just a gropu of controllers.*/
  signupForm: FormGroup;

  /* We be called before initializing template what is exactly what we need for Reactive approach */
  ngOnInit(): void {
    // this new FormGroup({}); will just create empty form wiht nothing
    this.signupForm = new FormGroup({
      'username' : new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male')
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
