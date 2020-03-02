import React from 'react';
import { connect } from 'react-redux';




const RepSong = ( {id_canciones_escuchadas}) => {
  return <section>
    {id_canciones_escuchadas}
  </section>;
}

const mapStateToProps = (state/*, otherProps */) => {
  return {
    id_canciones_escuchadas: state.user.id_canciones_escuchadas
  }
}



export default connect(
  mapStateToProps
)(RepSong);