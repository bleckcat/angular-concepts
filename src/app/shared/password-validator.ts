import { AbstractControl, ValidationErrors } from '@angular/forms';
import {
  CAPITAL_LETTER_REGEX,
  COMMON_LETTER_REGEX,
  NUMBER_REGEX,
  SPECIAL_CHARACTER_REGEX,
} from '../constants/RegEx';

export class PasswordValidator {
  capitalCheck() {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = !CAPITAL_LETTER_REGEX.test(control.value);
      return forbidden ? { forbiddenCapital: { value: control.value } } : null;
    };
  }
  commonCheck() {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = !COMMON_LETTER_REGEX.test(control.value);
      return forbidden ? { forbiddenCommon: { value: control.value } } : null;
    };
  }
  numberCheck() {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = !NUMBER_REGEX.test(control.value);
      return forbidden ? { forbiddenNumber: { value: control.value } } : null;
    };
  }
  specialCheck() {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = !SPECIAL_CHARACTER_REGEX.test(control.value);
      return forbidden ? { forbiddenSpecial: { value: control.value } } : null;
    };
  }
  passwordEqualityCheck() {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password');
      const confirmPassword = control.get('confirmPassword');

      return password &&
        confirmPassword &&
        password?.value !== confirmPassword?.value
        ? { passwordAreNotEqual: true }
        : null;
    };
  }
}
