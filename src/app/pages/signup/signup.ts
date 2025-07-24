import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PasswordCheckList } from '../../components/password-check-list/password-check-list';
import { SignupService } from '../../services/signup.service';
import { PasswordValidator } from '../../shared/password-validator';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule, RouterLink, PasswordCheckList],
  templateUrl: './signup.html',
  styles: ``,
})
export class Signup {
  signupService = inject(SignupService);
  passwordValidator = new PasswordValidator();
  signupGroup = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        this.passwordValidator.capitalCheck(),
        this.passwordValidator.commonCheck(),
        this.passwordValidator.numberCheck(),
        this.passwordValidator.specialCheck(),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    { validators: this.passwordValidator.passwordEqualityCheck() }
  );

  onSubmit() {
    const { password, username } = this.signupGroup?.value;
    if (password && username) {
      this.signupService.signin(username, password);
    }
  }
}
