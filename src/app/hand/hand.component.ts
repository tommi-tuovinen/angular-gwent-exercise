import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.sass']
})
export class HandComponent implements OnInit {
  handlimit : number = 10;
  @Input() cards : number[] = [0,0,0,0,0,0];

  constructor() { }

  ngOnInit(): void {
  }

}
