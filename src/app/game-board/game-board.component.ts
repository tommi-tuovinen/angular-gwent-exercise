import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.sass']
})
export class GameBoardComponent implements OnInit {
  @Input() cards : number[] = [0,0,0];

  constructor() { }

  ngOnInit(): void {
  }

}
