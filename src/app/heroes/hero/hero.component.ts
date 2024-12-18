import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',

})

export class HeroComponent {

  public name: string ='ironman';
  public age: number =45;

    get capitalizepName():string{
      return this.name.toUpperCase();
    }

    get HeroDescription():string{
      return `${this.name} - ${this.age}`;
    }

    changeName():void {
     this.name = 'Spider-Man';
    }
    changeEdad():void {
      this.age = 16;
     }

}




