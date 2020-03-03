import React from "react";
import UpPerfil from '../PerfilUsuario/UpPerfil';
import UpdatePerfil from "../PerfilUsuario/UpdatePerfil";
class Perfil extends React.Component{
    constructor(props) {
        super(props);
    
        //  Bind de los métodos
        this.updateApellido = this.updateApellido.bind(this);
    
        this.state = {
          
            updateApellido: this.updateApellido,
            updateTelefono:this.updateTelefono,
        }
    }
            updateApellido(apellido) {
                this.setState(() => ({ apellido }))}
            updateTelefono(telefono) {
                    this.setState(() => ({ telefono }));   
         
      }
    render(){
        return <div>

                   <h1> Perfil del usuario</h1>
                    <hr></hr>  
                    <p><UpdatePerfil/></p>
               
                    <hr></hr>  
                    <UpPerfil/>

             </div>
    }
}


export default Perfil ; 