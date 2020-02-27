// Definimos la lista de acciones
const actions = [
    // Usuarios
    "UPDATE_NAME",
    "LOGOUT",
    "UPDATE_APELLIDOS",
  
  ];
  
  // Las convertimos en un objeto
  const actionTypes = {};
  actions.forEach(action => {
    actionTypes[action] = action;
  });
  
  export default actionTypes;
  