import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Alert = ({ tipo, mensaje }) => {
  let alertClass;

  if (tipo === 'success') {
    alertClass = 'alert alert-success';
  } else {
    alertClass = 'alert alert-danger';
  }
  // console.log('Tipo:', tipo);

  return (
    <div className={alertClass} role="alert">
      {mensaje}
    </div>
  );
};

export default Alert;
