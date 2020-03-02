import types from './types';



export const updateName = (name) => ({
  type: types.UPDATE_NAME,
  name
});

export const updateNombre= (nombre) => ({
  type: types.UPDATE_NOMBRE,
  nombre
});



export const updateApellido = (apellido) => ({
  type: types.UPDATE_APELLIDO,
  apellido
});

export const updateEmail = (email) => ({
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


export const addSongToHistory = (id) => ({
  type: types.ADD_TO_HISTORY,
  id
});




export const addAlbumToHistory = (id) => ({
  type: types.ALBUM_TO_HISTORY,
  id
});


