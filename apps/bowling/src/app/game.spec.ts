// game.spec.ts
test('all one', () => {
  const game = new Game();
  for (let i = 0; i < 20; i++) {
    game.roll(1);
  }
  expect(game.score).toBe(20);
});