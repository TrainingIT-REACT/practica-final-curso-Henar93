

import React from 'react';
import { connect } from 'react-redux';
// Contexto de usuario
import UserContext from '../Context/user';
import { updateName } from '../actions/user';
import './Cerrar.css'


const Cerrar = ({ location, updateName }) => {
  return <UserContext.Consumer>

    {({ signedIn, updateUser }) => {
      return <div className='CerrarSesion'>
        { signedIn ? (
            <>
            <h2>¿Estás seguro de que quieres cerrar sesión?</h2>

           <button onClick={() => {updateUser(false); updateName('');}}>Logout</button>
           </>
        )
         :
        (
          
              <h2>
                Esperamos verte pronto por aquí
              </h2>
          
        )}

      </div>
    }}

  </UserContext.Consumer>;
}

const mapDispatchToProps = (dispatch) => ({
  updateName: (name) => dispatch(updateName(name)),
});

export default connect(  
  () => ({}),
  mapDispatchToProps
)(Cerrar);