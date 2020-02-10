import React, { Component } from 'react';

// Css
import './App.css';
import Navbar from './Navbar.js';



// Otros componentes

import Glossary from './Glossary';

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
    <div className="App"> 
        <Navbar/>
      <div className="Henarfy">
      
        <h1>Henarfy</h1>
       <button onClick={this.onClick}>Iniciar sesión</button>
       <button onClick={this.onClick}>Perfil de usuario</button>
      </div>
      <div className="container">
        
        <h2>Top éxitos</h2>
        <ul>
          
            <Glossary terms={terms} />
        
        </ul>
   
     </div>
    </div>
    );
  }
}

export default App;
