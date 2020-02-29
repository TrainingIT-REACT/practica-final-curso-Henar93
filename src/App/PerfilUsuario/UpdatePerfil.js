import React, { createRef } from 'react';
import { connect } from 'react-redux';

// Acciones
import { updateApellido } from '../actions/user';
import { updateTelefono } from '../actions/user';

const UpdateApellido = ({ updateApellido }) => {
  const input = createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    updateApellido(input.current.value);
    input.current.value = '';
  }

  return (
  <div>
    <form onSubmit={onSubmit}>
    <label htmlFor="name">Apellidos</label>
    <input id="name" type="text" ref={input} placeholder="Introduce tus apellidos"  /> 
    <button>Guardar</button>

   
    
  </form>
  </div>
 )
}

const UpdateTelefono= ({ updateTelefono}) => {
  const input = createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    updateTelefono(input.current.value);
    input.current.value = '';
  }

  return (
  <div>
    <form onSubmit={onSubmit}>
    <label htmlFor="name">Telefono</label>
    <input id="name" type="text" ref={input} placeholder="Introduce tus apellidos"  /> 
    <button>Guardar</button>

   
    
  </form>
  </div>
 )
}

const mapDispatchToProps = (dispatch) => ({
  updateApellido: (apellido) => dispatch(updateApellido(apellido)),
  updateTelefono: (telefono) => dispatch(updateApellido(telefono)),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(UpdateApellido, UpdateTelefono);
