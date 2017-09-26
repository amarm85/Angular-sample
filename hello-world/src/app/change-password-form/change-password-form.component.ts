import { PasswordValidators } from './password-validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent implements OnInit {

  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, PasswordValidators.checkOldPassword),
    changePassword: new FormGroup({
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    }, PasswordValidators.checkConfirmPasswordIsSameAsNewPassword)

  });

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('changePassword.newPassword');
  }

  get confirmPassword() {
    return this.form.get('changePassword.confirmPassword');
  }

  get changePassword(){
    return this.form.get('changePassword');
  }
  constructor() { }

  ngOnInit() {
  }

}
