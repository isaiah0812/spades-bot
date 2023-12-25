enum Suits {
  HEARTS, CLOVES, DIAMONDS, SPADES
}

enum Order {
  ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, JACK, QUEEN, KING, ACE
}

enum Jokers {
  LOW, HIGH
}

const CARDS = [
  Jokers.HIGH,
  Jokers.LOW,
  [Suits.HEARTS, Order.ONE],
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
  [Suits.CLOVES, Order.ONE],
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
  [Suits.DIAMONDS, Order.ONE],
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
  [Suits.SPADES, Order.ONE],
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

console.log('Suits:', Object.entries(Suits).filter(([key, _]) => isNaN(Number(key))))
console.log('Order:', Object.entries(Order).filter(([key, _]) => isNaN(Number(key))))
console.log('Jokers:', Object.entries(Jokers).filter(([key, _]) => isNaN(Number(key))))
