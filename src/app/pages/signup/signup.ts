import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SigninService } from '../../services/signin.service';
import { PasswordValidator } from '../../shared/password-validator.directive';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.html',
  styles: ``,
})
export class Signup {
  signService = inject(SigninService);
  passwordValidator = new PasswordValidator();
  signupControl = new FormGroup(
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
    const { password, username } = this.signupControl?.value;
    if (password && username) {
      this.signService.signin(username, password);
    }
  }
}
