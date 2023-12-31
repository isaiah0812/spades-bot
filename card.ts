export enum Suits {
  HEARTS = 'Hearts', CLUBS = 'Clubs', DIAMONDS = 'Diamonds', SPADES = 'Spades'
}

export enum Order {
  TWO = 2, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, JACK, QUEEN, KING, ACE
}

export enum Jokers {
  LOW, HIGH
}

export type Card = [Suits, Order] | Jokers;

export const CARDS: Card[] = [
  Jokers.HIGH,
  Jokers.LOW,
  [Suits.HEARTS, Order.TWO],
  [Suits.HEARTS, Order.THREE],
  [Suits.HEARTS, Order.FOUR],
  [Suits.HEARTS, Order.FIVE],
  [Suits.HEARTS, Order.SIX],
  [Suits.HEARTS, Order.SEVEN],
  [Suits.HEARTS, Order.EIGHT],
  [Suits.HEARTS, Order.NINE],
  [Suits.HEARTS, Order.TEN],
  [Suits.HEARTS, Order.JACK],
  [Suits.HEARTS, Order.QUEEN],
  [Suits.HEARTS, Order.KING],
  [Suits.HEARTS, Order.ACE],
  [Suits.CLUBS, Order.TWO],
  [Suits.CLUBS, Order.THREE],
  [Suits.CLUBS, Order.FOUR],
  [Suits.CLUBS, Order.FIVE],
  [Suits.CLUBS, Order.SIX],
  [Suits.CLUBS, Order.SEVEN],
  [Suits.CLUBS, Order.EIGHT],
  [Suits.CLUBS, Order.NINE],
  [Suits.CLUBS, Order.TEN],
  [Suits.CLUBS, Order.JACK],
  [Suits.CLUBS, Order.QUEEN],
  [Suits.CLUBS, Order.KING],
  [Suits.CLUBS, Order.ACE],
  [Suits.DIAMONDS, Order.TWO],
  [Suits.DIAMONDS, Order.THREE],
  [Suits.DIAMONDS, Order.FOUR],
  [Suits.DIAMONDS, Order.FIVE],
  [Suits.DIAMONDS, Order.SIX],
  [Suits.DIAMONDS, Order.SEVEN],
  [Suits.DIAMONDS, Order.EIGHT],
  [Suits.DIAMONDS, Order.NINE],
  [Suits.DIAMONDS, Order.TEN],
  [Suits.DIAMONDS, Order.JACK],
  [Suits.DIAMONDS, Order.QUEEN],
  [Suits.DIAMONDS, Order.KING],
  [Suits.DIAMONDS, Order.ACE],
  [Suits.SPADES, Order.TWO],
  [Suits.SPADES, Order.THREE],
  [Suits.SPADES, Order.FOUR],
  [Suits.SPADES, Order.FIVE],
  [Suits.SPADES, Order.SIX],
  [Suits.SPADES, Order.SEVEN],
  [Suits.SPADES, Order.EIGHT],
  [Suits.SPADES, Order.NINE],
  [Suits.SPADES, Order.TEN],
  [Suits.SPADES, Order.JACK],
  [Suits.SPADES, Order.QUEEN],
  [Suits.SPADES, Order.KING],
  [Suits.SPADES, Order.ACE],
];

export function shuffle(arr: Card[]): Card[] {
  const result = new Array(arr.length).fill([]);

  for (const item of arr) {
    let spot = -1;
    do {
      spot = Math.floor(Math.random() * 100) % arr.length;
    } while ((Array.isArray(result[spot]) && result[spot].length !== 0) || (!Array.isArray(result[spot]) && !isNaN(result[spot])));

    result[spot] = item;
  }

  return result
}

export function throwOut(cards: Card[], category: 'twos' | 'jokers' = 'twos'): void {
  if (category === 'twos') {
    cards.splice(
      cards.findIndex(card =>
        Array.isArray(card) && card[0] === Suits.CLUBS && card[1] === Order.TWO
      ),
    1);

    cards.splice(
      cards.findIndex(card =>
        Array.isArray(card) && card[0] === Suits.HEARTS && card[1] === Order.TWO
      ),
    1);
  } else {
    cards.splice(
      cards.findIndex(card =>
        !Array.isArray(card) && card === Jokers.HIGH
      ),
    1);

    cards.splice(
      cards.findIndex(card =>
        !Array.isArray(card) && card === Jokers.LOW
      ),
    1);
  }
}

export function toEmoji(suit: Suits): string {
  let emoji;
  
  switch (suit) {
    case Suits.HEARTS: emoji = '♥';
      break;
    case Suits.CLUBS: emoji = '♣';
      break;
    case Suits.DIAMONDS: emoji = '♦';
      break;
    case Suits.SPADES: emoji = '♠';
      break;
  }

  return emoji;
}

export function toFace(order: Order): string | number {
  let face;

  switch (order) {
    case Order.JACK: face = 'Jack';
      break;
    case Order.QUEEN: face = 'Queen';
      break;
    case Order.KING: face = 'King';
      break;
    case Order.ACE: face = 'Ace';
      break;
    default: face = order;
      break;
  }

  return face;
}

export const TOTAL_TURN_COMBOS = 20825;
export const TOTAL_BEATEN_COMBOS = (50 * 49) / 6;