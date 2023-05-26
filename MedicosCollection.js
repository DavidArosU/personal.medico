import { Mongo } from 'meteor/mongo';

const MedicosCollection = new Mongo.Collection('medicos');

export default MedicosCollection;