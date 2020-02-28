import React from "react";
import UserContext from '../Context/user';
import PerfilUser from '../PerfilUsuario/PerfilUser';
import {Provider} from "react-redux";
import UpPerfil from '../PerfilUsuario/UpPerfil';
import store from '../store';
class Perfil extends React.Component{
    constructor(props) {
        super(props);
    
        //  Bind de los métodos
        this.updateApellido = this.updateApellido.bind(this);
    
        this.state = {
          
            updateApellido: this.updateApellido,
        }
    }
            updateApellido(apellido) {
                this.setState(() => ({ apellido }));
           
         
      }
    render(){
        return <div>
            <UserContext.Provider value={this.state}>
                 <Provider store={store}>  
                   <h1> Perfil del usuario</h1>
                    <hr></hr>  
                    <PerfilUser/>
               
                    <hr></hr>  
                    <UpPerfil/>
                    </Provider>
                </UserContext.Provider>
             </div>
    }
}
const mapStateToProps = (state) => ({ ...state }); 

export default Perfil ; 