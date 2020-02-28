import React from 'react';
import { connect } from 'react-redux';



const UpApellido = ( {apellido}) => {
  return <section>
    <label>Datos Usuario</label>
    <label>{ apellido != null && apellido !== '' ? (apellido) : ' escribete leñe' }</label>
    
  </section>;
}
 
const mapStateToProps = (state/*, otherProps */) => {
  return {
    apellido: state.user.apellido
 
  }
}



export default connect(
  mapStateToProps
)(UpApellido);
