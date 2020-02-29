import types from './types';

export const updateName = (name) => ({
  type: types.UPDATE_NAME,
  name
});



export const updateApellido = (apellido) => ({
  type: types.UPDATE_APELLIDO,
  apellido
});

export const updatEmail = (email) => ({
  type: types.UPDATE_EMAIL,
  email
});

export const updateTelefono = (telefono) => ({
  type: types.UPDATE_TELEFONO,
  telefono
});

export const updateEdad= (edad) => ({
  type: types.UPDATE_EDAD,
  edad
});

