import { retornaArreglo } from '../../base/07-deses-arr';

describe('Testing on 07-deses-arr.js', () => {
  test('retornaArreglo should return a string and null', () => {
    const [letras, numeros] = retornaArreglo();
    
    expect(letras).toEqual('ABC');
    expect(typeof letras).toEqual('string');
    expect(numeros).toEqual(123);
    expect(typeof numeros).toEqual('number');
  });
    
})
