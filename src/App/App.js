
import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router} from "react-router-dom";


// Css
import './App.css';

//importar páginas 



//import Navbar from './Menu/general.js';
 import Loader from './Menu/Loader';

// Otros componentes



// Import dinámico 
const Navbar= React.lazy(() => import('./Menu/general.js')); 


class App extends Component {
   render() {
    
    return (

    <Suspense fallback={<Loader />}>
      {/* // <Suspense fallback={<Loader />}> */}
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
