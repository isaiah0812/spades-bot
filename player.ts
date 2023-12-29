import { CARDS, Card, Jokers, Order, Suits } from "./card";
import { factorial } from "./utils";

export default class Player {
  private _name: string;
  private _hand: Card[] = [];
  private _books: number = 0;
  private _bet: number = 0;

  constructor(name: string) {
    this._name = name;
  }

  get hand(): Card[] {
    return this._hand;
  }

  get books(): number {
    return this._books;
  }

  addToHand(card: Card) {
    this._hand.push(card);
  }

  playCard(plays: Card[]) {
    // TODO make decision
  }

  addBook() {
    this._books++;
  }

  get bet(): number {
    return this._bet;
  }

  makeBet(): void {
    let bet = 0;

    for (const card of this.hand) {
      bet += this.wonBookProbability(this.betterCardCount(card));
    }

    this.bet = Math.floor(bet);
  }

  private betterCardCount(card: Card) {
    let result = 0;

    if (Array.isArray(card)) {
      const [suit, order] = card;
      // Adding Jokers
      if (!this.hand.includes(Jokers.HIGH)) {
        result++;
      }

      if (!this.hand.includes(Jokers.LOW)) {
        result++;
      }

      // Rest of Suit
      result += Order.ACE - order - this.hand.filter(comp => comp[0] === suit && comp[1] > order).length;

      // All Spades, if not a spade
      if (suit !== Suits.SPADES) {
        result += 13 - this.hand.filter(comp => comp[0] === Suits.SPADES).length;
      }
    } else if (card === Jokers.LOW && !this.hand.includes(Jokers.HIGH)) {
      result++;
    }

    return result;
  }

  private wonBookProbability(betterCards: number): number {
    return 1 - (betterCards * ((factorial(50) / (2 * factorial(48))) / (factorial(51) / (6 * factorial(48)))));
  }

  get name(): string {
    return this._name;
  }

  private set bet(bet: number) {
    this._bet = bet;
  }
}