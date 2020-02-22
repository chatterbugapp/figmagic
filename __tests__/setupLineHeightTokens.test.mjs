import { setupLineHeightTokens } from '../bin/functions/setupLineHeightTokens';

/*
test('It should normalize the unit, given a width, px basis, and a conversion type', () => {
  expect(setupLineHeightTokens(400, 'px', 'rem')).toBe('25rem');
});
*/

test('It should throw an error if no parameter is provided', () => {
  expect(() => {
    setupLineHeightTokens();
  }).toThrow();
});
