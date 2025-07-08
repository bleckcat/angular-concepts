import { Component, Input } from '@angular/core';
import { Card } from '../../@types/stack-card.type';

@Component({
  selector: 'stack-card',
  imports: [],
  templateUrl: './stack-card.html',
  styles: ``,
})
export class StackCard {
  @Input() cardData: Card = {};
}
