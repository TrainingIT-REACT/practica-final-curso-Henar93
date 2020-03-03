import React from 'react';
import { connect } from 'react-redux';




const UpName = ( {name}) => {
  return <section>
    <label id="sayHello">{ name != null && name !== '' ? ('Hola ' + name + ' !') : 'Regístrate' }</label>
    
  </section>;
}

const mapStateToProps = (state/*, otherProps */) => {
  return {
    name: state.user.name
  }
}



export default connect(
  mapStateToProps
)(UpName);
