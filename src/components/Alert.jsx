// components/Alert.js
import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';


const Alert = ({ tipo, mensaje }) => {
  const alertClass = tipo === 'danger' ? 'alert alert-danger' : 'alert alert-danger';
  return (
    <div className={alertClass} role="alert">
      {mensaje}
    </div>
  );
};

Alert.propTypes = {
  tipo: PropTypes.oneOf(['danger', 'success']).isRequired,
  mensaje: PropTypes.string.isRequired,
};

export default Alert;
