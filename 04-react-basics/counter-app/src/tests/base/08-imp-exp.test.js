import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Testing on 08-imp-exp.js', () => {
  test('getHeroeById', () => {
    const id = 1;
    const hero = getHeroeById(id);

    const heroData = heroes.find( (hero) => hero.id === id);
    expect(hero).toEqual(heroData);
  });
  
  test('getHeroeById should return undefined for id = 0', () => {
    const id = 0;
    const hero = getHeroeById(id);
    expect(hero).toBe(undefined);
  });

  test('getHeroesByOwner for DC', () => {
    const owner = 'DC';
    const heroesByDC = getHeroesByOwner(owner);
    const heroesByDCTest = heroes.filter((hero) => hero.owner === owner );
    expect(heroesByDC).toEqual(heroesByDCTest);
  });

  test('getHeroesByOwner for Marvel', () => {
    const owner = 'Marvel';
    const heroesByMarvelLength = getHeroesByOwner(owner).length;
    expect(heroesByMarvelLength).toBe(2);
  });


})
