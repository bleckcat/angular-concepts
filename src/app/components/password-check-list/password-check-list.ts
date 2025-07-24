import { Component, input } from '@angular/core';

@Component({
  selector: 'app-password-check-list',
  imports: [],
  templateUrl: './password-check-list.html',
  styles: ``,
})
export class PasswordCheckList {
  forbiddenCapital = input<boolean | undefined>(false);
  forbiddenCommon = input<boolean | undefined>(false);
  forbiddenNumber = input<boolean | undefined>(false);
  forbiddenSpecial = input<boolean | undefined>(false);
}
