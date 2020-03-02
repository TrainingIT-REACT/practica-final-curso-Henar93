import React from 'react';
import { connect } from 'react-redux';




const RepSong = ( {history}) => {
  return <section>
    {history}
  </section>;
}

const mapStateToProps = (state/*, otherProps */) => {
  return {
    history: state.user.history
  }
}



export default connect(
  mapStateToProps
)(RepSong);