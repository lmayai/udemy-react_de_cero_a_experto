import React from 'react'
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

/* Para testing lybraru 
import { render } from '@testing-library/react';
*/

describe('Pruebas en <PrimeraApp />', () => {
  /* ESTA PRUEBA ES CON TESTING LIBRARY REACT
  
  test('should show the message "Primerita app"', () => {
    const saludo = 'Primerita app';
    const wrapper = render( <PrimeraApp mensaje={saludo} />);
    expect(wrapper.getByText(saludo)).toBeInTheDocument();
  
  })*/
  
  test('Should show <PrimerApp /> con Enzyme', () => {
    const saludo = 'Hola mundo';
    const wrapper = shallow(<PrimeraApp mensaje={saludo}/>);
    expect(wrapper).toMatchSnapshot();
  })

  test('should show the description, sent by props', () => {
    const saludo = 'Hola mundo';
    const description = 'Esta es la descripcion';
    const wrapper = shallow(
      <PrimeraApp 
        mensaje={saludo}
        description={description}
      />
    );

    // Esto es como un query selector
    //const textDescription = wrapper.find('small').html;
    const textDescription = wrapper.find('small').text();
    expect(textDescription).toBe(description);
  })
  
  


});
