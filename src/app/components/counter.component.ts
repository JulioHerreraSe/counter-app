import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/items.action';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  title: string = 'Contador usando redux';

  counter: number;

  constructor(private store: Store<{counter: number}>) {
    this.counter = 0;
    this.store.select('counter').subscribe( counter => {
      this.counter = counter;
    })
  }

  increment(): void {
    this.store.dispatch(increment({ add: 2}));
    console.log('Incrementado el contador');
  }

  decrement(): void {
    this.store.dispatch(decrement());
    console.log('decrementando el contador');
  }

  reset(): void {
    this.store.dispatch(reset());
    console.log('reset del contador');
  }

}
