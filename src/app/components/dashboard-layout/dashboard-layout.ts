import { Component, model } from '@angular/core';
import { Card } from '../../@types/stack-card.type';
import { StackColumnsProps } from '../../@types/stack-columns.type';
import { StackColumns } from '../stack-columns/stack-columns';

@Component({
  selector: 'app-dashboard-layout',
  imports: [StackColumns],
  templateUrl: './dashboard-layout.html',
  styles: ``,
})
export class DashboardLayout {
  cardsColumns = model<StackColumnsProps[]>([
    {
      title: 'Technology Stack',
      cards: [
        {
          status: 'active',
          name: 'Angular',
          description:
            'A platform for building mobile and desktop web applications.',
          icon: 'angular',
          link: 'https://angular.io',
          tags: ['framework', 'typescript'],
          color: '#DD0031',
          image: 'https://angular.io/assets/images/logos/angular/angular.png',
        },
        {
          status: 'active',
          name: 'React',
          description: 'A JavaScript library for building user interfaces.',
          icon: 'react',
          link: 'https://reactjs.org',
          tags: ['library', 'javascript'],
          color: '#222222',
          image: 'https://reactjs.org/logo-og.png',
        },
        {
          status: 'inactive',
          name: 'Vue.js',
          description: 'A progressive framework for building user interfaces.',
          icon: 'vue',
          link: 'https://vuejs.org',
          tags: ['framework', 'javascript'],
          color: '#42b883',
          image: 'https://vuejs.org/images/logo.png',
        },
        {
          status: 'active',
          name: 'Svelte',
          description: 'A modern framework for building user interfaces.',
          icon: 'svelte',
          link: 'https://svelte.dev',
          tags: ['framework', 'javascript'],
          color: '#FF3E00',
          image: 'https://svelte.dev/svelte-logo-horizontal.svg',
        },
      ],
    },
    {
      title: 'Test Stack',
      cards: [
        {
          status: 'active',
          name: 'Angular',
          description:
            'A platform for building mobile and desktop web applications.',
          icon: 'angular',
          link: 'https://angular.io',
          tags: ['framework', 'typescript'],
          color: '#DD0031',
          image: 'https://angular.io/assets/images/logos/angular/angular.png',
        },
      ],
    },
  ]);

  selectedCard: Card | null = null;

  onCardSelected(card: Card, columnIndex: number) {
    this.selectedCard = card;
    console.log('Selected card:', card);
    console.log('columnIndex:', columnIndex);
  }

  AddColumn() {
    const newColumn: StackColumnsProps = {
      title: `New Column ${this.cardsColumns().length + 1}`,
      cards: [],
    };
    this.cardsColumns.update((columns) => [...columns, newColumn]);
  }

  onEditCard(cardData: Card, columnIndex: number, cardIndex: number) {
    this.cardsColumns.update((columns) => {
      const newColumns = [...columns];
      const cardToEdit: Card = {
        ...newColumns[columnIndex].cards[cardIndex],
        ...cardData,
      };
      newColumns[columnIndex] = {
        ...newColumns[columnIndex],
        cards: newColumns[columnIndex].cards.map((card, index) =>
          index === cardIndex ? cardToEdit : card
        ),
      };
      return newColumns;
    });
  }

  onAddCard(columnIndex: number) {
    this.cardsColumns.update((columns) => {
      const newColumns = [...columns];
      const newCard: Card = {
        status: 'active',
        name: `New Card ${newColumns[columnIndex].cards.length + 1}`,
        description: 'This is a new card.',
        icon: 'new_releases',
        link: '',
        tags: [],
        color: '#000000',
        image: '',
      };
      newColumns[columnIndex] = {
        ...newColumns[columnIndex],
        cards: [...newColumns[columnIndex].cards, newCard],
      };
      return newColumns;
    });
  }
}
