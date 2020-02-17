

import React from 'react';
import {Link} from "react-router-dom";
// Contexto de usuario
import UserContext from '../Context/user';
import { Provider } from "react-redux";
//Css

import './login.css';
// Este componente utiliza el parámetro para mostrarlo en la interfaz







// Store
import store from '../store';





// Componentes
import UpdateName from '../UpdateName';







const Login = ({ location }) => {
  return <UserContext.Consumer>
    
    {({ signedIn, updateUser }) => {
      return <div>
        { signedIn ? (
          <p>Ya puedes ir al panel de administración! 👆</p>
        ) : (
          <>
            Introduce tu nombre en la URL.
             <Link to="/inicio_sesion/cris">/inicio_sesion/cris</Link>
            <button onClick={() => updateUser(true)}>Login</button>
            { (location.state && location.state.message) &&
              <p>
                { location.state.message }
              </p>
            }
          </>
        )}
        <Provider store={store}>
            <div className="App container">        
            <UpdateName />
          
        </div>
        </Provider>
      </div>
    }}
 
  </UserContext.Consumer>;
}


export default  Login;
