import { Component, input } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styles: ``,
})
export class Modal {
  isOpen = input<boolean>(false);
}
