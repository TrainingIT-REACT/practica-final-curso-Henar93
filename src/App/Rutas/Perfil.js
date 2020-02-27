import React from "react";
import PerfilUser from '../PerfilUsuario/PerfilUser';


class Perfil extends React.Component{
    render(){
        return <div>
                   <h1> Perfil del usuario</h1>
                    <hr></hr>  
                    <PerfilUser/>
                    <hr></hr>  
             </div>
    }
}


export default Perfil ; 