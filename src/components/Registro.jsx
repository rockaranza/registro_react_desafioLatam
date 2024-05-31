// components/Registro.js
import React from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';


const Registro = () => {
  return (
    <div className="container">
      <div id="formulario" className="w-400 rounded-3 border border-black text-center p-4 bg-light">
        <h1 className="fs-2">Crear una cuenta</h1>
        <div className="row d-flex flex-column my-3">
          <div className="col-md-6 w-100">
            <SocialButton icon="fa-brands fa-facebook" />
            <SocialButton icon="fa-brands fa-github" />
            <SocialButton icon="fa-brands fa-linkedin" />
          </div>
          <div className="col-md-6 w-100 my-2">
            <Formulario />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
