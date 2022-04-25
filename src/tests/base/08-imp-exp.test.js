import {
  getHeroeById,
  getHeroeByName,
  getHeroesByOwner,
} from '../../base/08-imp-exp';
import heroes from '../../base/data/heroes';

describe('Tests on 08-imp-exp', () => {
  test('getHeroeById: Must be return the hero by id', () => {
    const id = 1;
    const hero = getHeroeById(id);
    const heroData = heroes.find((h) => h.id === id);

    expect(hero).toEqual(heroData);
  });

  test('getHeroeById: Non exist hero', () => {
    const id = 68;
    const hero = getHeroeById(id);

    expect(hero).toBe(undefined);
  });

  test('getHeroeByName: Must be return the hero by name', () => {
    const name = 'Ironman';
    const hero = getHeroeByName(name);
    const heroData = heroes.find((h) => h.name === name);

    expect(hero).toEqual(heroData);
  });

  test('getHeroesByOwner: Must be return the heroes by owner', () => {
    const owner = 'DC';
    const heroArr = getHeroesByOwner(owner);
    const heroData = heroes.filter((h) => h.owner === owner);

    expect(heroArr).toEqual(heroData);
  });

  test('getHeroesByOwner: Must be return the heroes length by owner', () => {
    const owner = 'Marvel';
    const countHeroes = getHeroesByOwner(owner).length;

    expect(countHeroes).toEqual(3);
  });
});
