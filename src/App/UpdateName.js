import React, { createRef } from 'react';
import { connect } from 'react-redux';

// Acciones
import { updateName } from './actions/user';

const UpdateName = ({ updateName }) => {
  const input = createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    updateName(input.current.value);
    input.current.value = '';
  }

  return (
  <div><div>
    <form onSubmit={onSubmit}>
    <label htmlFor="name">Usuario</label>
    <input id="name" type="text" ref={input} placeholder="Angel, Tana, Raquel,..."  /> 
    <button>Login</button>

   
    
  </form>
  </div>
  <div>
      <label htmlFor="name">Contraseña</label>
      <input type="password" id="pwd" name="pwd" minlength="8"></input><br></br>
      
      </div></div>)
}

const mapDispatchToProps = (dispatch) => ({
  updateName: (name) => dispatch(updateName(name)),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(UpdateName);
