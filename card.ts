import { Card } from ".";

export default function shuffle(arr: Set<Card>): Card[] {
  const result = new Array(arr.size).fill([]);

  for (const item of arr) {
    let spot = -1;
    do {
      spot = Math.floor(Math.random() * 100) % arr.size;
    } while ((Array.isArray(result[spot]) && result[spot].length !== 0) || (!Array.isArray(result[spot]) && !isNaN(result[spot])));

    result[spot] = item;
  }

  return result
}