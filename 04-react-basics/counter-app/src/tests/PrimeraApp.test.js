import React from 'react'
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
  test('should show the message "Primerita app"', () => {
    const saludo = 'Primerita app';
    const wrapper = render( <PrimeraApp mensaje={saludo} />);
    expect(wrapper.getByText(saludo)).toBeInTheDocument();
  })
  
});
