

import React from 'react';
import {Link} from "react-router-dom";
// Contexto de usuario
import UserContext from '../Context/user';
//Css

import './login.css';
// Este componente utiliza el parámetro para mostrarlo en la interfaz




const Login = ({ location }) => {
  return <UserContext.Consumer>
    {({ signedIn, updateUser }) => {
      return <div>
        { signedIn ? (
          <p>Ya puedes ir al panel de administración! 👆</p>
        ) : (
          <>
            Introduce tu nombre en la URL.
  Por ejemplo: <Link to="/inicio_sesion/cris">/inicio_sesion/cris</Link>
            <button onClick={() => updateUser(true)}>Login</button>
            { (location.state && location.state.message) &&
              <p>
                { location.state.message }
              </p>
            }
          </>
        )}
      </div>
    }}
  </UserContext.Consumer>;
}


export default  Login;
