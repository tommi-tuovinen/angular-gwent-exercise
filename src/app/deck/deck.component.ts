import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.sass']
})
export class DeckComponent implements OnInit {
  @Input() cards : number[] = [0,0,0,0,0,0,0];
  constructor() { }

  ngOnInit(): void {
  }

}
