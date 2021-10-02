import confetti from '../src';

describe('confetti', () => {
  it('exports', () => {
    expect(confetti).toBeDefined();
    expect(confetti).toBeInstanceOf(Function);
  });
});
