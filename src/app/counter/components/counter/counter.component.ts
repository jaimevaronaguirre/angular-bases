import { Component } from "@angular/core";

// @Component({
//   standalone: true,
//   selector: 'app-counter',
//   template: '<h1>Holi</h1>'
// })

// export class CounterComponent {

// }



@Component({
  standalone: false,
  selector: 'app-counter',
  template:`
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>


  `
})

export class CounterComponent{
  public title = 'Hola Mundo';
  public counter: number =10;

  increaseBy(value: number):void {
    this.counter += value;
  }
  reset():void {
    this.counter = 10;
  }
}
