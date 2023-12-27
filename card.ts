export enum Suits {
  HEARTS, CLOVES, DIAMONDS, SPADES
}

export enum Order {
  TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, JACK, QUEEN, KING, ACE
}

export enum Jokers {
  LOW, HIGH
}

export type Card = [Suits, Order] | Jokers;

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
        Array.isArray(card) && card[0] === Suits.CLOVES && card[1] === Order.TWO
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