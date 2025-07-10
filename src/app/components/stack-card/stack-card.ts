import { Component, input, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Card } from '../../@types/stack-card.type';
import { Modal } from '../modal/modal';

@Component({
  selector: 'stack-card',
  imports: [ReactiveFormsModule, Modal],
  templateUrl: './stack-card.html',
  styles: ``,
})
export class StackCard {
  cardData = input<Card>({});
  isEditModalOpen = signal<boolean>(false);
  editCard = new FormGroup({
    status: new FormControl(this.cardData().status || ''),
    name: new FormControl(this.cardData().name || ''),
  });
  editedCard = output<{ status: string; name: string }>();

  switchEditCardModal() {
    this.isEditModalOpen.update((prevValue) => {
      return !prevValue;
    });
  }

  onSubmitEditCard(event: Event) {
    event.preventDefault();
    this.editedCard.emit(
      this.editCard.value as { status: string; name: string }
    );
  }
}
