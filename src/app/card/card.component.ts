import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  attackPower: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.attackPower = Math.ceil(Math.random() * 10)
  }

}
