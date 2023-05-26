import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React, { useState } from 'react';
import MedicosCollection from '../api/MedicosCollection';
import FormularioCrearMedico from './components/FormularioCrearMedico';
import FormularioEliminarMedico from './components/FormularioEliminarMedico';

const App = (medicos,loading) => {
  const [mostrarFormularioCrear, setMostrarFormularioCrear] = useState(false);
  const [mostrarFormularioEliminar, setMostrarFormularioEliminar] = useState(false);
  const [guardadoExitoso, setGuardadoExitoso] = useState(false);


  const handleMostrarFormularioCrear = () => {
    setMostrarFormularioCrear(true);
    setMostrarFormularioEliminar(false);
    setGuardadoExitoso(false);
  };

  const handleMostrarFormularioEliminar = () => {
    setMostrarFormularioCrear(false);
    setMostrarFormularioEliminar(true);
    setGuardadoExitoso(false);
  };

  const handleGuardadoExitoso = () => {
    setMostrarFormularioCrear(false);
    setMostrarFormularioEliminar(false);
    setGuardadoExitoso(true);
  };

  const handleReset = () => {
    setGuardadoExitoso(false);
  };

  return (
    <div>
      <h1>Personal Médico</h1>
      {!guardadoExitoso && !mostrarFormularioCrear && !mostrarFormularioEliminar && (
        <div>
          <button onClick={handleMostrarFormularioCrear}>Crear Médico</button>
          <button onClick={handleMostrarFormularioEliminar}>Eliminar Médico</button>
        </div>
      )}
      {mostrarFormularioCrear && (
        <FormularioCrearMedico
          onGuardadoExitoso={() => {
            handleGuardadoExitoso();
            handleReset();
          }}
        />
      )}
      {mostrarFormularioEliminar && (
        <FormularioEliminarMedico
          onGuardadoExitoso={() => {
            handleGuardadoExitoso();
            handleReset();
          }}
        />
      )}

{     medicos.length > 0 && (
        <div>
          <h2>Lista de Médicos:</h2>
          <ul>
            {medicos.map((medico) => (
              <li key={medico._id}>{medico.nombre}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default withTracker(() => {
  const handle = Meteor.subscribe('medicos');

  return {
    medicos: MedicosCollection.find({}).fetch(),
    loading: !handle.ready(),
  };
})(App);