import React from "react";
import UserContext from '../Context/user';
import PerfilUser from '../PerfilUsuario/PerfilUser';
import {Provider} from "react-redux";
import UpPerfil from '../PerfilUsuario/UpPerfil';
import store from '../store';
import Login from "../PerfilUsuario/PerfilUser";
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
            {/* <UserContext.Provider value={this.state}> */}
                 {/* <Provider store={store}>   */}
                   <h1> Perfil del usuario</h1>
                    <hr></hr>  
                    <p><UpdatePerfil/></p>
               
                    <hr></hr>  
                    <UpPerfil/>
                    {/* </Provider> */}
                {/* </UserContext.Provider> */}
             </div>
    }
}
const mapStateToProps = (state) => ({ ...state }); 

export default Perfil ; 