// Definimos la lista de acciones
const actions = [
    // Usuarios
    "UPDATE_NAME", //nombre login
    "LOGOUT",
    "UPDATE_NOMBRE",//nombre real del usuario
    "UPDATE_APELLIDO",
    "UPDATE_EMAIL",
    "UPDATE_TELEFONO",
    "UPDATE_EDAD",
    "ADD_TO_HISTORY",
    "ALBUM_TO_HISTORY"
  
  ];
  
  // Las convertimos en un objeto
  const actionTypes = {};
  actions.forEach(action => {
    actionTypes[action] = action;

  });

  export default actionTypes;
  