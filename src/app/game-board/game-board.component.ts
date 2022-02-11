import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.sass']
})
export class GameBoardComponent implements OnInit {
  @Input() cards : Card[] = [];
  @Input() attackPower : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
