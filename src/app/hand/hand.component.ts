import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.sass']
})
export class HandComponent implements OnInit {
  handlimit : number = 10;
  @Input() cards : Card[] = [new Card(3, 'hello', 'type')];

  constructor() { }

  ngOnInit(): void {
  }

}
