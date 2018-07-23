import Position, { centersOverlap, Container, generateNonOverlapping } from '../../../src/components/common/balls/Position';

describe('generateNonOverlapping', () => {
  it('does not generate a single overlap in 100 calls', () => {
    const container = Container(200, 200);
    const priorPos = Position(75, 75, 50);
    for (let i = 0; i < 100; i += 1) {
      const generatedPosition = generateNonOverlapping([priorPos], 100, container);
      expect(centersOverlap(priorPos, generatedPosition))
        .to.be(false);
    }
  });
});
