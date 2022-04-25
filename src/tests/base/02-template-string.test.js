import { getSaludo } from '../../base/02-template-string';

describe('Test in the 02-template-string.js file', () => {
  test('getSaludo must be return Hola Pablo', () => {
    const name = 'Pablo';

    const greeting = getSaludo(name);

    expect(greeting).toBe(`Hello, ${name}`);
  });

  test('getSaludo must be return Hello, World! if parameter is null or empty', () => {
    const greeting = getSaludo();

    expect(greeting).toBe('Hello, World!');
  });
});
