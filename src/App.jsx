
import React from 'react';
import { useState } from 'react';
import './App.css'
import Registro from './components/Registro'
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from './components/Alert';

function App() {
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  const mostrarMensaje = (mensaje, tipo) => {
    setMensaje(mensaje);
    setTipoMensaje(tipo);
  };
  return (
    <>
      <Registro mostrarMensaje={mostrarMensaje} />
      {mensaje && <Alert mensaje={mensaje} tipo={tipoMensaje} />}
    </>
  );
}

export default App;
