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

  genders = [ 'male', 'female'];

  defaultOption = 'pet';
  answer: string;
  submitted = false;

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    /* We can set up work with NgForm do to any modifications from code. 1st way just set up json object
    representing our form with values. That way is not the best as it is going ovvereide already values which
    were put before. But good option if we need to fill everething out with one click.*/
    /* this.form.setValue({
      userNameEmail: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    }); */
    /* The below option is better. We can get the actial form object as NgForm is just container of the from(wrapper) */
    this.form.form.patchValue({
      userNameEmail: {
        username: suggestedName
      },
      secret: 'teacher',
    });
  }

  /* onSubmit(form: NgForm) {
    console.log('Submitted!');
    console.log(form);
  } */

  onSubmit() {
    console.log('Submitted!');
    console.log(this.form);
    this.submitted = true;
    this.user.username = this.form.value.userNameEmail.username;
    this.user.email = this.form.value.userNameEmail.email;
    this.user.secretQuestion = this.form.value.secret;
    this.user.answer = this.form.value.questionAnswer;
    this.user.gender = this.form.value.gender;
    /* This form.reset() will not just reset the form but also all properties to default falues (e.g. touched false and so on)*/
    // this.form.reset();
    /* WE also can reset it in the way below and set up some new values upon reseting */
    this.form.reset({
      userNameEmail: {
        username: 'suggestedName'
      },
      secret: 'teacher',
    });
  }

}
