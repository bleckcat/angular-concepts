import { Component, input, output } from '@angular/core';
import { Card } from '../../@types/stack-card.type';
import { StackCard } from '../stack-card/stack-card';

@Component({
  selector: 'stack-columns',
  imports: [StackCard],
  templateUrl: './stack-columns.html',
  styles: ``,
})
export class StackColumns {
  cards = input<Card[]>([]);
  title = input<string>('');
  selectedCard = output<Card>();
  onAddCard = output<void>();
  editCard = output<Card>();

  handleEditedCard(data: any) {
    this.editCard.emit(data);
  }

  onSelectCard(card: Card) {
    this.selectedCard.emit(card);
  }

  onEditCard(cardNewData: Card) {
    this.editCard.emit(cardNewData);
  }

  addCard() {
    this.onAddCard.emit();
  }
}
