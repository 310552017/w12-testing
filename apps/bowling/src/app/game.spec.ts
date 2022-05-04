// game.spec.ts
test('test on one strike', () => {
  game.roll(10);
  game.roll(3);
  game.roll(4);
  rollMany(17, 0);
  expect(game.score).toBe(24);
});