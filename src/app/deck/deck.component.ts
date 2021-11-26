import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.sass']
})
export class DeckComponent implements OnInit {
  @Input() cards : Card[] = [new Card(1, 'hello', 'type'), new Card(2, 'hello', 'type'), new Card(3, 'hello', 'type')];
  constructor() { }

  ngOnInit(): void {
  }

}
