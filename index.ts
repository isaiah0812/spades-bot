import { CARDS, Jokers, shuffle, throwOut, toEmoji, toFace } from "./card";
import Player from "./player";
import "./extensions";

const deck = shuffle(CARDS);
throwOut(deck);

const players: Player[] = [new Player('Alice'), new Player('Bob'), new Player('Cathy'), new Player('Dave')];
Array.from(deck.values()).forEach((card, index) => {
  players[index % players.length].addToHand(card);
});

const teams = [
  players.even(),
  players.odd()
];

for (const player of players) {
  player.makeBet();
  console.log(
    `${player.name} Tests:\n\tHand: [ ${player.hand.map((card) => Array.isArray(card) ? `${toFace(card[1])} of ${toEmoji(card[0])}` : (card === Jokers.HIGH ? 'High' : 'Low') + '🃏').join(', ')} ]\n\n\tBet: ${player.bet}`
  );
}

// TODO play game
