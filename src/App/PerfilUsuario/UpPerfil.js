import React from 'react';
import { connect } from 'react-redux';




const UpApellido = ( {apellido}) => {
  return <section>
    <label>{ 'Apellidos : ' + apellido }</label>
    
  </section>;
}

const UpTelefono = ( {telefono}) => {
  return <section>
    <label>{ 'Telefono : ' + telefono }</label>
    
  </section>;
}


const mapStateToProps = (state/*, otherProps */) => {
  return {
    apellido: state.perfil.apellido,
    telefono: state.perfil.telefono
  }
}



export default connect(
  mapStateToProps
)(UpApellido, UpTelefono);
