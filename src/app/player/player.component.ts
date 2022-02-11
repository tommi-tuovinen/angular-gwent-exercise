import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnInit {

  handCards: Card[] = [];
  tableCards: Card[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  drawCard(card: Card) {
    this.handCards.push(card);
  }

  playCard(card: Card) {
    this.handCards = this.handCards.filter(c => c !== card);
    this.tableCards.push(card);
  }
}
