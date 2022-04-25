import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../base/data/heroes';

describe('Tests on 09-promesas', () => {
  test('getHeroeByIdAsync: Must be return a hero', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toBe(heroes[0]);
      done();
    });
  });

  test('getHeroeByIdAsync: Non exist hero', (done) => {
    const id = 98;
    let err = '';

    getHeroeByIdAsync(id)
      .then((hero) => {
        console.log(hero);
      })
      .catch((error) => {
        //err = error;
        console.log(error);
      });

    expect(err).toBe('No se pudo encontrar el héroe');
  });
});
