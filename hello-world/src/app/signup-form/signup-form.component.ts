import { UserNameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('',
        [Validators.required, Validators.minLength(3)],
        UserNameValidators.shouldBeUnique),
      password: new FormControl('', UserNameValidators.connotContainSpace)
    })
  });

  constructor() { }

  ngOnInit() {
  }

  get username() {

    return this.form.get('account.username');
  }

  get password() {
    return this.form.get('account.password');
  }

  log(username) {
    console.log(username);

  }

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
    console.log(this.form.value);

  }

}
