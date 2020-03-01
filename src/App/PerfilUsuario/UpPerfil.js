import React from 'react';
import { connect } from 'react-redux';




const UpPerfil= ( {nombre, apellido, telefono,email,edad}) => {
  return <section>
    <label>{ 'Nombre : ' + nombre }</label>
    <br></br>
    <label>{ 'Apellidos : ' + apellido }</label>
    <br></br>
    <label>{ 'Telefono: '+ telefono }</label>
    <br></br>
    <label>{ 'email: '+ email}</label>
    <br></br>
    <label>{ 'Edad: '+ edad }</label>
    
  </section>;
}









const mapStateToProps = (state/*, otherProps */) => {
  return {
    nombre:state.perfil.nombre, 
    apellido: state.perfil.apellido,
    telefono: state.perfil.telefono,
    email: state.perfil.email,
    edad: state.perfil.edad,
  }
}



export default connect(
  mapStateToProps
)(UpPerfil);
