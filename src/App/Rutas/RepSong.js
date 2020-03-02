import React from 'react';
import { connect } from 'react-redux';




const RepSong = ( {history}) => {
  return <section>
    {history}
  </section>;
}

const mapStateToProps = (state/*, otherProps */) => {
  return {
    id: state.user.id
  }
}



export default connect(
  mapStateToProps
)(RepSong);