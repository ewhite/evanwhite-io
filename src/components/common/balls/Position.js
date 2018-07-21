import _ from 'lodash';

const Position = (top, left, radius) => ({
  top,
  left,
  radius,
  topPx: `${top}px`,
  leftPx: `${left}px`,
});

export default Position;

const randomWithinBounds = (min, max) => {
  if (min > max) throw new Error('min > max!!');
  const multiplier = max - min;
  return Math.floor(Math.random() * multiplier + min);
};

const getHeightPx = () => 650;
const getWidthPx = () => 650;

const getTopBounds = ballDiameter => [0, getHeightPx() - ballDiameter];
const getLeftBounds = ballDiameter => [0, getWidthPx() - ballDiameter];

export const generatePositionForBall = (ballDiameter = 200) => {
  const [minTop, maxTop] = getTopBounds(ballDiameter);
  const [minLeft, maxLeft] = getLeftBounds(ballDiameter);
  const top = randomWithinBounds(minTop, maxTop);
  const left = randomWithinBounds(minLeft, maxLeft);
  return Position(top, left, ballDiameter / 2);
};

// eslint-disable-next-line no-restricted-properties
const distanceBetween = (p1, p2) => Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
const Coord = (x, y) => ({ x, y });
const getCenterOf = pos => Coord(pos.top + pos.radius, pos.left + pos.radius);

const centersOverlap = (position1, position2) => {
  const minDistance = position1.radius + position2.radius;
  return distanceBetween(getCenterOf(position1), getCenterOf(position2)) < minDistance;
};

const generateNonOverlapping = (priorPositions, nextDiameter) => {
  const potentialPosition = generatePositionForBall(nextDiameter);
  const overlapsNone = priorPositions.every(pos => !centersOverlap(pos, potentialPosition));
  return overlapsNone ? potentialPosition : generateNonOverlapping(priorPositions, nextDiameter);
};

const addNewNonOverlappingPosition = (positions, nextDiameter) => {
  const nextPosition = generateNonOverlapping(positions, nextDiameter);
  return positions.concat([nextPosition]);
};

export const createPositions = (priorPositions = [], diameters) =>
  diameters.reduce(addNewNonOverlappingPosition, priorPositions);

export const createPositionsConstantDiameter = (priorPositions = [], diameter, n) => {
  const diameters = _.fill(Array(n), diameter);
  return createPositions(priorPositions, diameters);
};
