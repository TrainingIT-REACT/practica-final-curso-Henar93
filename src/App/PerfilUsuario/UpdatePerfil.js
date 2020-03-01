import React, { createRef } from 'react';
import { connect } from 'react-redux';

// Acciones
import { updateNombre } from '../actions/user';
import { updateApellido } from '../actions/user';
import { updateTelefono } from '../actions/user';
import { updateEmail } from '../actions/user';
import { updateEdad } from '../actions/user';

const UpdatePerfil= ({updateNombre,  updateApellido , updateTelefono, updateEmail, updateEdad}) => {
  const inputNombre = createRef () ; 
  const inputApellido = createRef();
  const inputTelefono = createRef();
  const inputEmail = createRef();
  const inputEdad = createRef(); 

  const onSubmit = (e) => {
    e.preventDefault();
    updateNombre(inputNombre.current.value);
    updateApellido(inputApellido.current.value);
    updateTelefono(inputTelefono.current.value);
    updateEmail(inputEmail.current.value);
    updateEdad(inputEdad.current.value);
  
  }

  return (
  <div>
    <form onSubmit={onSubmit}>
    <label htmlFor="name">Nombre</label>
    <input id="name" type="text" ref={inputNombre} placeholder="Introduce tu nombre"  /> <br></br>
    <label htmlFor="name">Apellidos</label>
    <input id="name" type="text" ref={inputApellido} placeholder="Introduce tus apellidos"  /> <br></br>
    <label htmlFor="name">Teléfono</label>
    <input id="name" type="text" ref={inputTelefono} placeholder={"Introduce teléfono"}  />  <br></br>
    <label htmlFor="name">Email</label>
    <input id="name" type="text" ref={inputEmail} placeholder="Introduce email" />  <br></br>
    <label htmlFor="name">Edad</label>
    <input id="name" type="text" ref={inputEdad} placeholder="Introduce edad" />  <br></br>
    <button>Guardar</button>

  
   
    </form>
  </div>
 )
}

const mapDispatchToProps = (dispatch) => ({
  updateNombre: (nombre) => dispatch(updateNombre(nombre)),
  updateApellido: (apellido) => dispatch(updateApellido(apellido)),
  updateTelefono: (telefono) => dispatch(updateTelefono(telefono)),
  updateEmail: (email) => dispatch(updateEmail(email)),
  updateEdad: (edad) => dispatch (updateEdad(edad))
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(UpdatePerfil);


