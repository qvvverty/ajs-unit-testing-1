import showHealth from '../index';

const testCharacters = [
  [{name: 'Маг', health: 30 }, 'wounded'],
  [{ name: 'Воин', health: 65 }, 'healthy'],
  [{ name: 'Вор', health: 5 }, 'critical'],
];

test.each(testCharacters)('%s should return "%s" status', (character, expected) => {
  expect(showHealth(character)).toBe(expected);
});
