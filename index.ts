import shuffle from "./card";

enum Suits {
  HEARTS, CLOVES, DIAMONDS, SPADES
}

enum Order {
  TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, JACK, QUEEN, KING, ACE
}

enum Jokers {
  LOW, HIGH
}

export type Card = [Suits, Order] | Jokers;

const CARDS: Set<Card> = new Set<Card>([
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
  [Suits.CLOVES, Order.TWO],
  [Suits.CLOVES, Order.THREE],
  [Suits.CLOVES, Order.FOUR],
  [Suits.CLOVES, Order.FIVE],
  [Suits.CLOVES, Order.SIX],
  [Suits.CLOVES, Order.SEVEN],
  [Suits.CLOVES, Order.EIGHT],
  [Suits.CLOVES, Order.NINE],
  [Suits.CLOVES, Order.TEN],
  [Suits.CLOVES, Order.JACK],
  [Suits.CLOVES, Order.QUEEN],
  [Suits.CLOVES, Order.KING],
  [Suits.CLOVES, Order.ACE],
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
]);

const deck = shuffle(CARDS);

console.log(deck);