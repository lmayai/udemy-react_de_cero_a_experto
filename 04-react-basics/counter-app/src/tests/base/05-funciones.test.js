import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('TEsting on 05-funciones', () => {
  test('getUser should return an object', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };
    const user = getUser();
    expect(user).toEqual(userTest);
  })

  test('getUsuarioActivo retrona objeto', () => {
    const nombre = 'Juan';
    const usuarioActivoTest = {
      uid: 'ABC567',
      username: nombre
    }
    const usuarioActivo = getUsuarioActivo(nombre);
    expect(usuarioActivo).toEqual(usuarioActivoTest);
  })
  
  test('getUsuarioActivo retrona objeto sin nombre', () => {
    const usuarioActivoTest = {
      uid: 'ABC567',
      username: ''
    }
    const usuarioActivo = getUsuarioActivo();
    expect(usuarioActivo).toEqual(usuarioActivoTest);
  })

});
