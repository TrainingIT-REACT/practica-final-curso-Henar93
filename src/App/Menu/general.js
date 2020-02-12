import React from 'react';
import { BrowserRouter as Router,Route,  Link} from "react-router-dom";
import './general.css';





class Navbar extends React.Component {

    render() {

        return (
        <Router>
            <nav className="navbar navbar-inverse" >
                <div className="container-fluid">
                    <div className="navbar-header">
                        
                        <ul>
                      
                
                        <li><a className="navbar-brandP" href="/">Perfil</a></li>
                        <li><a className="navbar-brand" href="/">Inicio sesion</a></li>
                        <li> <div class="dropdown">
                                     <button class="dropbtn">Dropdown</button>
                                     <div class="dropdown-content">
                                              <p >Link 1</p>
                                                <p>Link 2</p>
                                                <p>Link 3</p>
                                    </div>
                            </div>
                        </li>
                        </ul>
                    
                    </div> 
                </div> 
                <div class="dropdown">
                         <button class="dropbtn">Dropdown</button>
                         <div class="dropdown-content">
                                <Link to="/me" >Link 1</Link>
                                
                              
                                <Link to="/about" >Link 2</Link>
                                 <p>Link 3</p>
                                 
                      
                        </div>

                </div>
       
         </nav>
 
    </Router>
        )
    }
};
//Navbar = withRouter(Navbar);

export default Navbar;

