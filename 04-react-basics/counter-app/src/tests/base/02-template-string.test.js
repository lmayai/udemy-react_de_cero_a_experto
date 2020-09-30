import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('testing on 02-template-string', () => {
  
  test('#getSaludo shpud return Hola Fernando', () => {
    const nombre = 'Fernando';
    const saludo = getSaludo(nombre);

    expect(saludo).toBe('Hola ' + nombre);

  });

  test('$getSaludo should return Hola Carlos if no params', () => {
    const saludo = getSaludo();
    expect(saludo).toBe('Hola Carlos');
  })
  

});
