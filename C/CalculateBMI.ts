/**
 *
 */

export function bmi(weight: number, height: number): string {
  const index = weight / height ** 2;

  if (index <= 18.5) return 'Underweight';
  if (index <= 25.0) return 'Normal';
  if (index <= 30.0) return 'Overweight';
  return 'Obese';
}

console.log(bmi(80, 1.8));

// I prefer Switch statements because they can be better in performance

export function bmiV2(weight: number, height: number): string {
  const index = weight / Math.pow(height, 2);
  // Switch(true) pattern alternative to if...else
  switch (true) {
    case index <= 18.5:
      return 'Underweight';
    case index <= 25.0:
      return 'Normal';
    case index <= 30.0:
      return 'Overweight';
    case index > 30.0:
      return 'Obese';
    default:
      return 'Error computing BMI';
  }
}

console.log(bmiV2(80, 1.8));
