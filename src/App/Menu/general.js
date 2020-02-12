import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import './general.css';
import Musica from '../Rutas/Musica';
import Home from '../Rutas/Home';
import About from '../Rutas/About';



//const close =() =><p>chaO</p>; 





const cerrar = ({ match }) => <div>
  <p>Para más info</p>
  <p>
    <NavLink activeClassName="active" to={`${match.url}/close`}>Anídate en la marina</NavLink>
    {' '}
  
  </p>

</div>;


class Navbar extends React.Component {

    render() {

        return (
            <Router>
                <nav className="navbar navbar-inverse" >
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <ul>
                                <li><NavLink to="/musica" >Perfil</NavLink></li>
                                <li><NavLink to="/" >Inicio sesión</NavLink></li>
                                <li> 
                                    <div class="dropdown">
                                        <button class="dropbtn">Dropdown</button>
                                        <div class="dropdown-content">
                                            <NavLink to="/about" >l1</NavLink>
                                            <p>Link 2</p>
                                            <p>Link 3</p>
                                        </div>
                                    </div>
                                </li>
                                <li><NavLink to="/cerrar" >Cerrar</NavLink> </li>
                            </ul>
                        </div>
                    </div>
             
                </nav>
                
    <Route path="/musica" exact component={Musica} /> 
    <Route path="/" exact component={Home} /> 
    <Route path="/about" exact component={About} />
    <Route path="/cerrar" exact component={cerrar} /> 
            </Router>
        )
    }
};
//Navbar = withRouter(Navbar);  

export default Navbar;

