import { Card } from "./card";

export default class Player {
  private _name: string;
  private _deck: Set<Card> = new Set();
  private _books: number = 0;
  private _bet: number = 0;

  constructor(name: string) {
    this._name = name;
  }

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

  get bet(): number {
    return this._bet;
  }

  get name(): string {
    return this._name;
  }
}