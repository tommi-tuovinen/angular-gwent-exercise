import { Component, Input, OnInit } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() card: Card | undefined;
  @Input() attackPower : number = 0;

  constructor() {}

  ngOnInit(): void {
    this.attackPower = Math.ceil(Math.random() * 10);
  }

}
