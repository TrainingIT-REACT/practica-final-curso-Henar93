import React from 'react';

// Contexto de usuario
import { Provider } from "react-redux";


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
