import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { Person } from './interface/person.interface';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  person: Person = {
    name: "Dima",
    age: 37,
    position: "ABC",
  }

  constructor() {
    this.person.name = "12"
    this.person.age = 37
    this.person.position = "Boss"
  }




}
