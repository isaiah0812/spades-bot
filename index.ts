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
  ...Object.entries(Jokers).filter(([key, _]) => isNaN(Number(key)))
];

// TODO run through each suit and for each order, make a card and add it to CARDS

console.log('Suits:', Object.entries(Suits).filter(([key, _]) => isNaN(Number(key))))
console.log('Order:', Object.entries(Order).filter(([key, _]) => isNaN(Number(key))))
console.log('Jokers:', Object.entries(Jokers).filter(([key, _]) => isNaN(Number(key))))
