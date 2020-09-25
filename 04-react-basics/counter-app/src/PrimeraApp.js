// Los componentes se escriben con Upper Camel Case
// Functional Components
import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

const PrimeraApp = ({mensaje, saludo = 'Hola Mundo', description }) => {

  return (
    <Fragment>
      <h1> { saludo } </h1>
      {/* <pre>{JSON.stringify(variable, null, 3)}</pre> */}
      <p> { mensaje } </p>
      <small> {description} </small>
    </Fragment>
  );
}

PrimeraApp.defaultProps = {
  description: 'Esta descripcion es por defecto'
}

PrimeraApp.propTypes = {
  mensaje: PropTypes.string.isRequired,
  saludo: PropTypes.string,
}

export default PrimeraApp;
