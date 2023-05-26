import React, { useState } from 'react';
import MedicosCollection from '../../api/MedicosCollection';

const FormularioEliminarMedico = ({ onGuardadoExitoso }) => {
    const [rut, setRut] = useState('');
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
  
      if (!rut) {
        console.log('Por favor ingresa el RUT del médico a eliminar');
        return;
      }

      const medicoExistente = MedicosCollection.findOne({ rut: rut });
      if (!medicoExistente) {
        console.log('El médico no existe');
        return;
      }
  
      MedicosCollection.remove({ rut: rut }, (error) => {
        if (error) {
          console.log('Error al eliminar el médico:', error);
        } else {
          console.log('Médico eliminado exitosamente');
          onGuardadoExitoso();
        }
      });
    };
  
    return (
      <div>
        <h2>Eliminar Médico</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            placeholder="RUT del médico a eliminar"
          />
          <button type="submit">Eliminar</button>
        </form>
      </div>
    );
  };

export default FormularioEliminarMedico;
