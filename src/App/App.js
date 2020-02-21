
import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route , NavLink} from "react-router-dom";


// Css
import './App.css';

//importar páginas 



//import Navbar from './Menu/general.js';
import Loader from './Menu/Loader';

// Otros componentes



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
         
            <Navbar/>        
            <div className="container">    
            <hr></hr>  
               
            </div>
         </div>

</Router>
    </Suspense>
    );
  }
}

export default App;
