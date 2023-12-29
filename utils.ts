export function factorial(root: number): number {
  let result = 1;

  for (let i = root; i > 0; i--) {
    result *= i;
  }
  
  return result;
}