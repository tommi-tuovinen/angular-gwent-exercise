import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Card } from './card/card';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cards = [
      { name: 'Geralt', attackPower: 13, type: '' },
      { name: 'Ciri', attackPower: 10, type: '' },
      { name: 'Yennefer', attackPower: 14, type: '' },
    ];
    return {cards};
  }
}
