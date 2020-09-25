// Los componentes se escriben con Upper Camel Case
// Functional Components
import React, { Fragment } from 'react';

const PrimeraApp = () => {

  const saludo = 'Hola Mundo';
  const variable = {
    key: 'value',
  };

  return (
    <Fragment>
      <h1> {saludo} </h1>
      {/* <pre>{JSON.stringify(variable, null, 3)}</pre> */}
      <p>La primerita app</p>
    </Fragment>
  );
}

export default PrimeraApp;