

import React from 'react';

// Contexto de usuario
import UserContext from '../Context/user';


const Cerrar = ({ location }) => {
  return <UserContext.Consumer>
    
    {({ signedIn, updateUser }) => {
      return <div>
        { signedIn ? (
           
           <button onClick={() => updateUser(false)}>Logout</button>
           

        )
         : 
        (
          <>


        
              <h2>
                Esperamos verte pronto por aquí 
              </h2>
              
           
          </>
        )}

      </div>
    }}
 
  </UserContext.Consumer>;
}


export default  Cerrar;
