// game.spec.ts
test('test on one spare', () => {
  game.roll(5);
  game.roll(5); // spare
  game.roll(3);
  rollMany(17, 0);
  expect(game.score).toBe(16);
});