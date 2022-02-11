import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.sass']
})
export class HandComponent implements OnInit {
  handlimit : number = 10;
  @Input() cards : Card[] = [];
  @Output() playCardEvent = new EventEmitter<Card>();

  constructor() { }

  ngOnInit(): void {
  }

  playCard(card: Card): void {
    this.cards = this.cards.filter(c => c !== card);
    this.playCardEvent.emit(card);
  }
}
