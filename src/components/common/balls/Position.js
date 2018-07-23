const Position = (top, left, radius) => ({
  top,
  left,
  radius,
  topPx: `${top}px`,
  leftPx: `${left}px`,
});

export default Position;

export const Container = (height, width) => ({
  height,
  width,
});
export const Coord = (x, y) => ({ x, y });

const randomWithinBounds = (min, max) => {
  if (min > max) throw new Error('min > max!!');
  const multiplier = max - min;
  return Math.floor(Math.random() * multiplier + min);
};

const getTopBounds = (ballDiameter, container) => [0, container.height - ballDiameter];
const getLeftBounds = (ballDiameter, container) => [0, container.width - ballDiameter];

export const generatePositionForBall = (ballDiameter = 200, container) => {
  const [minTop, maxTop] = getTopBounds(ballDiameter, container);
  const [minLeft, maxLeft] = getLeftBounds(ballDiameter, container);
  const top = randomWithinBounds(minTop, maxTop);
  const left = randomWithinBounds(minLeft, maxLeft);
  return Position(top, left, ballDiameter / 2);
};

// eslint-disable-next-line no-restricted-properties
const distanceBetween = (p1, p2) => Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
const getCenterOf = pos => Coord(pos.top + pos.radius, pos.left + pos.radius);

export const centersOverlap = (position1, position2) => {
  const minDistance = position1.radius + position2.radius;
  return distanceBetween(getCenterOf(position1), getCenterOf(position2)) < minDistance;
};

export const generateNonOverlapping = (priorPositions, nextDiameter, container) => {
  const potentialPosition = generatePositionForBall(nextDiameter, container);
  const overlapsNone = priorPositions.every(pos => !centersOverlap(pos, potentialPosition));
  return overlapsNone
    ? potentialPosition
    : generateNonOverlapping(priorPositions, nextDiameter, container);
};

const addNextOverlappingPosition = container => (positions, nextDiameter) => {
  const nextPosition = generateNonOverlapping(positions, nextDiameter, container);
  return positions.concat([nextPosition]);
};

export const createPositions = (priorPositions = [], diameters, container) => {
  const priorLength = priorPositions.length;
  const addNextPositionInContainer = addNextOverlappingPosition(container);
  const allPositions = diameters.reduce(addNextPositionInContainer, priorPositions.slice(0));
  return allPositions.slice(priorLength, allPositions.length);
};
