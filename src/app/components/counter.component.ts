import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  title: string = 'Contador usando redux';

  counter: number;

  constructor() {
    this.counter = 0;
  }

  increment(): void {
    this.counter++;
    console.log('Incrementado el contador');
  }

  decrement(): void {
    this.counter--;
    console.log('decrementando el contador');
  }

  reset(): void {
    this.counter = 0;
    console.log('reset del contador');
  }

}
