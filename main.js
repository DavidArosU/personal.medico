import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const insertMedico = new ValidatedMethod({
    name: '/medicos/insert',
    validate: null, 
    run(nuevoMedico) {
    },
  });
  
export const eliminarMedico = new ValidatedMethod({
  name: '/medicos/eliminar',
  validate: null,
  run(rutMedico) {
    const medico = Meteor.call('/medicos/buscarPorRut', rutMedico);

    if (!medico) {
      throw new Meteor.Error('medico-no-encontrado', 'No se encontró el médico con el rut especificado');
    }

    Meteor.call('/medicos/eliminarPorId', medico._id);

    return medico._id;
  },
});

Meteor.methods({
  '/medicos/buscarPorRut'(rutMedico) {
    check(rutMedico, String);
    return MedicosCollection.findOne({ rut: rutMedico });
  },
  '/medicos/eliminarPorId'(medicoId) {
    check(medicoId, String);
    MedicosCollection.remove(medicoId);
  },
});
