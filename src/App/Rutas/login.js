import React, { createRef } from 'react';

// Contexto de usuario
import UserContext from '../Context/user';
import { Provider } from "react-redux";
import { Redirect } from 'react-router-dom'; 
 
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
                        <Redirect
                        to={{
                          pathname: '/about',
                          state: {
                            message: 'Por favor, haz login primero'
                          }
                        }}></Redirect>
        )
         : 
        (
          <>



            
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
