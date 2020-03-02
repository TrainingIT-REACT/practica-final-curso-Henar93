import React, { createRef } from 'react';
import { connect } from 'react-redux';

// Acciones
import { updateName } from './actions/user';
import UserContext from './Context/user';

const UpdateName = ({ updateName }) => {
  const input = createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    updateName(input.current.value);
    input.current.value = '';
  }

  return (
  <div>
    <UserContext.Consumer>
    {({ updateUser }) => {
    return <form onSubmit={(e)=>{onSubmit(e);updateUser(true);}}>
      <div>
    <label htmlFor="name">Usuario</label>
    <input id="name" type="text" required ref={input} placeholder="Angel, Tana, Raquel,..."  /> 
    <button>Login</button>   
  </div>
  <div>
      <label htmlFor="name">Contraseña</label>
      <input type="password" id="pwd" required name="pwd" minLength="8"></input><br></br>
      
      </div>
      </form>}}
  </UserContext.Consumer>
      </div>)
}

const mapDispatchToProps = (dispatch) => ({
  updateName: (name) => dispatch(updateName(name)),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(UpdateName);
