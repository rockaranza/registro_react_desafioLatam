import React, { useState } from 'react';
import Alert from './Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [mensajeError, setMensajeError] = useState('');
  const [tipo, setTipo] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'nombre':
        setNombre(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'contrasena':
        setContrasena(value);
        break;
      case 'confirmarContrasena':
        setConfirmarContrasena(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre === '' || email === '' || contrasena === '' || confirmarContrasena === '') {
      setMensajeError('Todos los campos son obligatorios');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMensajeError('El formato del email es inválido');
      return;
    }

    if (contrasena !== confirmarContrasena) {
      setMensajeError('Las contraseñas no coinciden');
      setTipo('danger');
      return;
    }else{
      setMensajeError('Registro exitoso');
      setTipo('success');
      return;
    }

  };

  return (
    <div className="container">
      <h2 className="fs-6">O usa tu email para registrarte</h2>
      <form onSubmit={handleSubmit} style={{ backgroundColor: '', padding: '20px' }}>
        <div className="form-group">
          <label htmlFor="nombre"></label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contrasena"></label>
          <input
            type="password"
            className="form-control"
            id="contrasena"
            name="contrasena"
            placeholder="Contraseña"
            value={contrasena}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmarContrasena"></label>
          <input
            type="password"
            className="form-control"
            id="confirmarContrasena"
            name="confirmarContrasena"
            placeholder="Confirma tu contraseña"
            value={confirmarContrasena}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn my-3 w-100 btn-color">Registrarse</button>
      </form>
      {mensajeError && <Alert tipo={tipo} mensaje={mensajeError} />}
    </div>
  );
};

export default Formulario;
