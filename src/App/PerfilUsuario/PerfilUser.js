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
import UpdatePerfil from './UpdatePerfil';

const Perfil = () => {
return(        <Provider store={store}>
    <div className="App container">        
    <UpdatePerfil />   
   
   </div>
</Provider>
)



;
}



export default  (Perfil);
