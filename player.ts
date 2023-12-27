import { Card } from "./card";

export default class Player {
  private _deck: Set<Card> = new Set();
  private _books: number = 0;

  constructor() {}

  get deck(): Set<Card> {
    return this._deck;
  }

  get books(): number {
    return this._books;
  }

  addToDeck(card: Card) {
    this._deck.add(card);
  }

  playCard(plays: Card[]) {
    
  }

  addBook() {
    this._books++;
  }
}