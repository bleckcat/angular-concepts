import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PasswordCheckList } from '../../components/password-check-list/password-check-list';
import { LoginService } from '../../services/login.service';
import { PasswordValidator } from '../../shared/password-validator';

@Component({
  selector: 'app-login',
  imports: [RouterLink, PasswordCheckList, ReactiveFormsModule],
  templateUrl: './login.html',
  styles: ``,
})
export class Login {
  loginService = new LoginService();
  passwordValidator = new PasswordValidator();
  loginGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      this.passwordValidator.capitalCheck(),
      this.passwordValidator.commonCheck(),
      this.passwordValidator.numberCheck(),
      this.passwordValidator.specialCheck(),
    ]),
  });

  onSubmit() {
    const { password, username } = this.loginGroup.value;

    if (username && password) {
      this.loginService.login(username, password);
    }
  }
}
