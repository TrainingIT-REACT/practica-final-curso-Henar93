import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import {Provider} from "react-redux";

import './general.css';
import Musica from '../Rutas/Musica';
import About from '../Rutas/About';
import Login from '../Rutas/login';
import Home from '../Rutas/Home';
import UserContext from '../Context/user';

import UpName from '../Rutas/UpName';



// Store
import store from '../store';

import UpName from '../Rutas/UpName';
//const close =() =><p>chaO</p>; 



// Componente para definir rutas privadas
import PrivateRoute from '../Context/PrivateRoute';

const cerrar = ({ match }) => <div>
  <p>Para más info</p>
  <p>
    <NavLink activeClassName="active" to={`${match.url}/close`}>Anídate en la marina</NavLink>
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
                                <li><NavLink activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '1em'}} to="/musica" >Perfil</NavLink></li>
                                <li><NavLink activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '1em'}} to="/inicio_sesion" >Inicio sesion</NavLink></li>
                                <li> 
                                    <div class="dropdown">
                                        <button class="dropbtn"><UpName/></button>
                                        <div class="dropdown-content">
                                            <NavLink  to="/about" >l1</NavLink>
                                            <p>Link 2</p>
                                            <p>Link 3</p>
                                        </div>
                                    </div>
                                </li>

                                <li><NavLink activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '1em'}} to="/cerrar" >Cerrar</NavLink> </li>

                            </ul>
                        
                        </div>
                    </div>
           
                </nav>
               
                <PrivateRoute path="/musica" exact component={Musica} />  
                <Route path="/inicio_sesion" exact component={Login} /> 
                <Route path="/about" exact component={About} />
                <Route path="/" exact component={Home} /> 
                <Route path="/cerrar" exact component={cerrar} /> 
                </Provider>
                </UserContext.Provider>

            </Router>
        )
    }
};
//Navbar = withRouter(Navbar);  

export default Navbar;

