import React from "react";
import Glossary from '../Glossary';
import { NavLink } from "react-router-dom";






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
        return <div>
                
                <h2>Top exitos</h2>
                    <ul>
                
                     <Glossary terms={terms} />
                </ul>
                <h3> Ya puedes descubir las últimas novedades</h3>
                <button> <NavLink  to="/inicio_sesion" >Inicio sesion</NavLink></button>
             </div>
    }
}

export default Home;