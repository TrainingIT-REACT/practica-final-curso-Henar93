import React from "react";
import Glossary from '../Glossary';







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
class Home extends React.Component{
    render(){
        return <div>
                
                <h2>Top exitos</h2>
                    <ul>
                
                     <Glossary terms={terms} />
                </ul>
             </div>
    }
}

export default Home;