export default function Position(top, left) {
  return {
    top,
    left,
  };
}

const randomBetween1And100 = () => Math.floor(Math.random() * 100 + 1);
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const generateRandomClampedBySize = (ballSize) => {
  const randomClamped = clamp(randomBetween1And100(), 20, 80);
  return randomClamped > 50
    ? `calc(${randomClamped}% - ${ballSize}px)`
    : `calc(${randomClamped}% + ${ballSize}px)`;
};

export function generatePositionForBall(ballSize) {
  return Position(
    generateRandomClampedBySize(ballSize || 200),
    generateRandomClampedBySize(ballSize || 200)); // eslint-disable-line function-paren-newline
}
