import React, { createRef } from 'react';
import { connect } from 'react-redux';

// Acciones
import { updateApellido } from '../actions/user';

const  UpdateApellido  = ({  updateApellido  }) => {
  const input = createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    updateApellido (input.current.value);
    input.current.value = '';
  }

  return (
  <div>
    <form onSubmit={onSubmit}>
    <label htmlFor="name">Nombre</label>
    <input id="name" type="text" ref={input} placeholder="Angel, Tana, Raquel,..."  /> 
    <button>Añadir</button>   
  </form>
 
</div>)
}

const mapDispatchToProps = (dispatch) => ({
    updateApellido : (apellido) => dispatch(updateApellido (apellido)),

});



export default connect(
  () => ({}),
  mapDispatchToProps,
)( UpdateApellido );
