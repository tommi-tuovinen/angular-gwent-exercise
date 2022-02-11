import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../card/card';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.sass']
})
export class DeckComponent implements OnInit {
  cards: Card[] = []

  @Output() drawCardEvent = new EventEmitter<Card>();
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.cardService.getCards()
      .subscribe(cards => this.cards = cards);
  }

  drawCard(card: Card): void {
    this.cards = this.cards.filter(c => c !== card);
    this.drawCardEvent.emit(card);
  }
}
