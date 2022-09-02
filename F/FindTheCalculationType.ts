export function calcType(a: number, b: number, res: number): string {
  if (a + b === res) return 'addition';
  if (a * b === res) return 'multiplication';
  if (a / b === res) return 'division';
  if (a - b === res) return 'subtraction';
  return '';
}
