import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { GameBoardComponent } from './game-board/game-board.component';
import { HandComponent } from './hand/hand.component';
import { DeckComponent } from './deck/deck.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GameBoardComponent,
    HandComponent,
    DeckComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
