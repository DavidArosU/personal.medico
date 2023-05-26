import React, { useState } from 'react';
import MedicosCollection from '../../api/MedicosCollection';

const FormularioCrearMedico = ({ onGuardadoExitoso }) => {
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [rut, setRut] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [region, setRegion] = useState('');
  const [comuna, setComuna] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (
      !nombre ||
      !apellidoPaterno ||
      !apellidoMaterno ||
      !rut ||
      !fechaNacimiento ||
      !nacionalidad ||
      !domicilio ||
      !region ||
      !comuna
    ) {
      console.log('Por favor completa todos los campos del formulario');
      return;
    }

    const nuevoMedico = {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      rut,
      fechaNacimiento,
      nacionalidad,
      domicilio,
      region,
      comuna,
    };

    MedicosCollection.insert(nuevoMedico, (error, medicoId) => {
      if (error) {
        console.log('Error al guardar el médico:', error);
      } else {
        console.log('Médico guardado exitosamente');

        setNombre('');
        setApellidoPaterno('');
        setApellidoMaterno('');
        setRut('');
        setFechaNacimiento('');
        setNacionalidad('');
        setDomicilio('');
        setRegion('');
        setComuna('');
        onGuardadoExitoso();
        
      }
    });
  };

  return (
    <div>
      <h2>Crear Médico</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
        />
        <input
          type="text"
          value={apellidoPaterno}
          onChange={(e) => setApellidoPaterno(e.target.value)}
          placeholder="Apellido Paterno"
        />
        <input
          type="text"
          value={apellidoMaterno}
          onChange={(e) => setApellidoMaterno(e.target.value)}
          placeholder="Apellido Materno"
        />
        <input
          type="text"
          value={rut}
          onChange={(e) => setRut(e.target.value)}
          placeholder="RUT"
        />
        <input
          type="text"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
          placeholder="Fecha de Nacimiento"
        />
        <input
          type="text"
          value={nacionalidad}
          onChange={(e) => setNacionalidad(e.target.value)}
          placeholder="Nacionalidad"
        />
        <input
          type="text"
          value={domicilio}
          onChange={(e) => setDomicilio(e.target.value)}
          placeholder="Domicilio"
        />
        <input
          type="text"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          placeholder="Región"
        />
        <input
          type="text"
          value={comuna}
          onChange={(e) => setComuna(e.target.value)}
          placeholder="Comuna"
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
    );
  };
  
  export default FormularioCrearMedico;
  
