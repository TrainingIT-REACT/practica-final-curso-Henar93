import React from 'react';

// Contexto de usuario
import UserContext from '../Context/user';
import { Provider } from "react-redux";
import { Redirect } from 'react-router-dom'; 
import { connect } from 'react-redux';
//Css


// Este componente utiliza el parámetro para mostrarlo en la interfaz

// Store
import store from '../store';

// Componentes
import UpdateApellido from './UpdatePerfil';
import UpdateTelefono from './UpdatePerfil';
const Apellido = () => {
return(        <Provider store={store}>
    <div className="App container">        
    <UpdateApellido />   
   
   </div>
</Provider>
)



;
}


const Telefono =() => {
    return(        <Provider store={store}>
        <div className="App container">        
        <UpdateTelefono />   
       
       </div>
    </Provider>
    )
    
    
    
    ;
    }
export default  (Apellido, Telefono);
