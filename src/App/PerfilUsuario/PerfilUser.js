import React from 'react';

// Contexto de usuario
import UpdatePerfil from './UpdatePerfil';
import UserContext from '../Context/user';
import { Provider } from "react-redux";
import { Redirect } from 'react-router-dom'; 
 

// Este componente utiliza el parámetro para mostrarlo en la interfaz

// Store
import store from '../store';

// Componentes
import UpdateName from '../UpdateName';
import { updateApellido } from '../actions/user';


const  PerfilUser =()=>{
    return( <UserContext.Consumer> 
                    
              
                  
        <Provider store={store}>
        <div className="App container">        
        <UpdatePerfil />   
       </div>
    </Provider>
   
    </UserContext.Consumer>    )


    
}
 
       
    

; 
// return (
//   <Provider store={store}>
//   <div className="App container">        
//   <UpdatePerfil/>   
//  </div>
// </Provider>

// )

  

 export default  PerfilUser;
