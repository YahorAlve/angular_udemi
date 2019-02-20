import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUserNames = ['Chris', 'Anna'];

  /* In TD approach we had NgFrom wich angular papulated automatically and NgForm is actially wrapper to FormGroup
     and FormGroup it is just a gropu of controllers.*/
  signupForm: FormGroup;

  /* We be called before initializing template what is exactly what we need for Reactive approach */
  ngOnInit(): void {
    // this new FormGroup({}); will just create empty form wiht nothing
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        /* Mentor mentioned a few times that function name w/o () it is just refernce to function, he mentioend don't 
        execute it just pass the reference (w/o parentheses)*/
        /* IF we just pass this.forbiddenNames it will fail with tricky exception as inside function forbiddenNames we 
        have this.forbiddenUserNames - and based on mentor comment it is javascript specific and it is improtant who is
        going to call this fucntion. In our case it is not called in this specific class it is called outside in some angular 
        form class and it doesn't have such property as this.forbiddenUserNames. But we can add binding to our current class 
        this as we did below and it will find this.forbiddenUserNames as this will be pointed to this currecnt class. */
        /* for asynch validator we are using third argument value */
        'username' : new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmailsAsynch)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    /* this.signupForm.valueChanges.subscribe(
      (value) => console.log(value)
    ); */
    this.signupForm.statusChanges.subscribe(
      (value) => console.log(value)
    );
    this.signupForm.setValue({
      'userData': {
        'username': 'yahor',
        'email': 'yahor@epam.com'
      },
      'gender': 'male',
      'hobbies': []
    });
    this.signupForm.patchValue({
      'userData': {
        'username': 'Anna'
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    // we also can provide json to reset not all values just some spicific
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    // example of casting to FormArray for typescript not throwing an error
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  /* This is just a syntax {[s:string]: boolean } saying that it will return json where key is string and value is boolean */
  forbiddenNames(control: FormControl): {[s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true };
    }
    /* If validation passed successfully we should return nothing or null. We should not return {'key': false} */
    return null;
  }

  /* Ng-pending attribute will show up temporarely for time waiting for response  */
  forbiddenEmailsAsynch(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
            if (control.value === 'test@test.com') {
              resolve ({'forbiddenEmail' : true});
            } else {
              resolve(null);
            }
          }, 1500);
    });
    return promise;
  }

}
