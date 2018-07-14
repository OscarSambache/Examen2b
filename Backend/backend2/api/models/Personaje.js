/**
 * Personaje.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombrePersonaje:{
      type: 'string',
      required: true
    },

    imagenPersonaje:{
      type: 'string',
      required: true
    },

    tituloPersonaje:{
      type: 'string',
      required: true
    },

    estadoPersonaje:{
      type: 'string',
      required: true
    },

    origenPersonaje:{
      type: 'string',
      required: true
    },

    precioPersonaje:{
      type: 'number',
      required: true
    },
    casaIdFK:{
      model: 'Casa'
    },

  },

};

