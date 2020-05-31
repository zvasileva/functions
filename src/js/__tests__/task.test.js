import health from '../task';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 30 }, 'wounded'],
  [{ name: 'Маг', health: 3 }, 'critical'],
])('get health', (item, expected) => {
  const result = health(item);

  expect(result).toBe(expected);
});
