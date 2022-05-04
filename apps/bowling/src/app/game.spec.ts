// game.spec.ts
test('perfect game', () => {
  rollMany(12, 10);
  expect(game.score).toBe(300);
});