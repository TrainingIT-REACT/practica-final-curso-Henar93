import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import {Provider} from "react-redux";
import './general.css';
import Musica from '../Rutas/Musica';
import About from '../Rutas/About';
import Login from '../Rutas/login';
import Home from '../Rutas/Home';
import Perfil from '../Rutas/Perfil';
import Cerrar from '../Rutas/Cerrar';
import UserContext from '../Context/user';





// Store
import store from '../store';
import UpName from '../Rutas/UpName';
//const close =() =><p>chaO</p>; 



// Componente para definir rutas privadas
import PrivateRoute from '../Context/PrivateRoute';

const cerrar = ({ match }) => <div>
  <p>Para cerrar sesión haz click </p>
  <p>
    <NavLink activeClassName="active" to={`${match.url}/close`}>aquí</NavLink>
    {' '}
  
  </p>

</div>;


class Navbar extends React.Component {
    constructor(props) {
        super(props);
    
        // Bind de los métodos
        this.updateUser = this.updateUser.bind(this);
    
        this.state = {
          signedIn: false,
          updateUser: this.updateUser,
        }
      }
    
      updateUser(signedIn) {
        this.setState(() => ({ signedIn }));
      }
    render() {

        return (
            <Router>
                 <UserContext.Provider value={this.state}>
                 <Provider store={store}>  
                <nav className="navbar navbar-inverse" >
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <ul>
                                <li>
                                    <NavLink activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '1em'}} to="/home" ><svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/><path d="M0 0h24v24H0z" fill="none" /></svg></NavLink>
                                </li>
                                <li> 
                                    <div className="dropdown">
                                    
                                        <button className="dropbtn">
                                                <UpName/>
                                        </button>
                                        
                                            <div className="dropdown-content">

                                                    <NavLink activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '1em'}} to="/inicio_sesion" >Inicio sesion</NavLink>
                                                    <NavLink activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '1em'}} to="/Perfil" >Perfil</NavLink>
                                                    <NavLink activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '1em'}} to="/musica" >Música</NavLink>
                                                    <NavLink activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '1em'}} to="/Cerrar" >Cerrar</NavLink>
                                            </div>
   
                                    </div>
  
                                </li>
                                <li>                                  
                                    <div className="minombre">
                                        <h2>Henarfy</h2>
                                    </div>
                               </li>
                            </ul>
                        </div>
                        
                    </div>
           
                </nav>
               
                <PrivateRoute path="/musica" exact component={Musica} />  
                <Route path="/inicio_sesion" exact component={Login} /> 
                <Route path="/about" exact component={About} />
                
                <Route path="/home" exact component={Home} /> 
                <Route path="/cerrar" exact component={Cerrar} /> 
                <PrivateRoute path="/perfil" exact component={Perfil} /> 
                </Provider>
                </UserContext.Provider>
            </Router>
        )
    }
};
//Navbar = withRouter(Navbar);  

const mapStateToProps = (state) => ({ ...state }); 
export default Navbar;




