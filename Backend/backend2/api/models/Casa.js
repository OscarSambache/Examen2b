/**
 * Casa.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreCasa:{
      type: 'string',
      required: true
    },
    blazonCasa:{
      type: 'string',
      required: true
    },

    lemaCasa:{
      type: 'string',
      required: true
    },

    regionCasa:{
      type: 'string',
      required: true
    },

    asentamientoCasa:{
      type: 'string',
      required: true
    },


    Personajes: {
      collection: 'Personaje',
      via: 'casaIdFK'
    },

  },

};

