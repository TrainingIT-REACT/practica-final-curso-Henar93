
import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route , NavLink} from "react-router-dom";


// Css
import './App.css';

//importar páginas 

import Home from './Rutas/Home';
import About from './Rutas/About';
//import Musica from './Rutas/Musica';


//import Navbar from './Menu/general.js';
import Loader from './Menu/Loader';

// Otros componentes

import Glossary from './Glossary';



const close =() =><p>chaO</p>; 





const cerrar = ({ match }) => <div>
  <p>Para más info</p>
  <p>
    <NavLink activeClassName="active" to={`${match.url}/close`}>Anídate en la marina</NavLink>
    {' '}
  
  </p>

</div>;


const Musica = ({Musica}) =>(
  <div>
    <p>Example musicote</p>

  </div>
)


// List de términos para el glosario
const terms = [
  {
    term: "C1",
    definition: "a"
  },
  {
    term: "C2",
    definition: "b"
  }
];

// Import dinámico 
const Navbar= React.lazy(() => import('./Menu/general.js')); 


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('/albums');
      const json = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        albums: json
      }));
    } catch(err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  render() {
    
    return (

      // <Suspense maxDuration={150} fallback="Cargando página">
      <Suspense fallback={<Loader />}>
    
      <Router>
        <div className="App"> 
        <h1>Henarfy</h1>
        <NavLink activeClassName="active"  activeStyle="active"  to="/me">Prueba1</NavLink>
        <NavLink activeclassName="active" to="/about">Prueba2</NavLink>
        <NavLink activeclassName="active"  to="/musica">Música</NavLink>
        <NavLink activeclassName="active"  to="/cerrar">Close</NavLink>
        
        <Navbar/>
         
      
               
          <div className="container">
        
          <h2 >Top éxitos</h2>
     
               <hr/>
              <ul>
          
               <Glossary terms={terms} />
        
               </ul>
   
        </div>
    </div>
    <Route path="/about" exact component={Home} />
    <Route path="/me" exact component={About} /> 
    <Route path="/musica" exact component={Musica} /> 
    <Route path="/cerrar" exact component={cerrar} /> 
</Router>
    </Suspense>
    );
  }
}

export default App;
