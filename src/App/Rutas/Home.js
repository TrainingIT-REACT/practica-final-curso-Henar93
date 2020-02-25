import React from "react";
import Glossary from '../Glossary';
import Login from './login';
import {  BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import Musica from './Musica';
import UserContext from '../Context/user';
import {Provider} from "react-redux";


// Store
import store from '../store';


// Componente para definir rutas privadas
import PrivateRoute from '../Context/PrivateRoute';

// List de términos para el glosario
const terms = [
  {
    term: "Chip off the old bloc",
    definition: "Blair"
  },
  {
    term: "Decisions decisions",
    definition: "Skylar"
  },
  {
    term: "Ice cold",
    definition: "Kimberley"
  }
];
class Home extends React.Component{
    render(){
        return (
          // <Router>
          //  {/* <UserContext.Provider value={this.state}> */}
          //     <Provider store={store}>
                <div> 
                  <h2>Top exitos</h2>
                  <ul>
                    <Glossary terms={terms} />
                  </ul>
                  <h3> Ya puedes descubir las últimas novedades</h3>
                  {/* <button>  */}
                    <NavLink  to="/musica" >Música</NavLink>
                  {/* </button> */}
                 </div>
              //    <PrivateRoute path="/musica" exact component={Musica} />
              //    <Route path="/inicio_sesion" exact component={Login} />
              // </Provider>
            /* </UserContext.Provider> */
          // </Router>
          )
        }
};
//const mapStateToProps = (state) => ({ ...state });
export default Home;