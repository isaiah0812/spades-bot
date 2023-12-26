import { Card } from ".";

export default class Player {
  deck: Set<Card> = new Set();
  books: number = 0;

  constructor() {}

  addToDeck(card: Card) {
    this.deck.add(card);
  }

  playCard(plays: Card[]) {
    
  }

  addBook() {
    this.books++;
  }
}