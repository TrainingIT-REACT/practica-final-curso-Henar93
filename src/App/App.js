
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
                 <img border="0" 
                  src="data:image/png;base64,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"></img>

              
            </div>
         </div>

</Router>
    </Suspense>
    );
  }
}

export default App;
