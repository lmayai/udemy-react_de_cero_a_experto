import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Testing on 09-promesas', () => {
  test('getHeroeByIdAsync should return an hero', (done) => {
    getHeroeByIdAsync(1)
      .then( (hero) => {
        expect(hero).toEqual(heroes[0]);
        done();
      })
  });

  test('getHeroeByIdAsync should get an error if hero doesnt exist', (done) => {
    getHeroeByIdAsync(10)
      .catch( (error) => {
        expect(error).toBe('No se pudo encontrar el héroe');
        done();
      })
  });
});
