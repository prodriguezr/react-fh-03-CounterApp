import { retornaArreglo } from '../../base/07-deses-arr';

describe('Tests on 07-deses-arr', () => {
  test('retornaArreglo: Must be return an string and a number', () => {
    const arr = retornaArreglo(); // 'ABC', 123

    expect(arr).toEqual(['ABC', 123]);
  });
  test('retornaArreglo: Must be return an string', () => {
    const [letters, numbers] = retornaArreglo(); // 'ABC', 123

    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');
  });
});
