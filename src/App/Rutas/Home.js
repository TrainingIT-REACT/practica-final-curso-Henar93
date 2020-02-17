
import React from "react";
import { Provider } from "react-redux";
//import { connect } from 'react-redux';



// Store
import store from '../store';







// Componentes
import UpdateName from '../UpdateName';
import UpName from './UpName'
 class Home extends React.Component{
     render(){
        return <Provider store={store}>
        <div className="App container">        
            <UpdateName />
          
        </div>

      </Provider>
    }
 }





export default Home;