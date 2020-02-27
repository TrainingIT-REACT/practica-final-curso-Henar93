import types from './types';

export const updateName = (name) => ({
  type: types.UPDATE_NAME,
  name
});



export const updateApellido = (apellido) => ({
  type: types.UPDATE_APELLIDOS,
  apellido
});
