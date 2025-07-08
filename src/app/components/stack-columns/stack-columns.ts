import { Component } from '@angular/core';
import { Card } from '../../@types/stack-card.type';
import { StackCard } from '../stack-card/stack-card';

@Component({
  selector: 'app-stack-columns',
  imports: [StackCard],
  templateUrl: './stack-columns.html',
  styles: ``,
})
export class StackColumns {
  cards = [
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
      color: '#61DAFB',
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
  ] as Card[];
}
