import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {getTopAlbums}  from '../storeMusic/StoreMusic';
import Loader from '../Menu/Loader';
import './Home.css';

class Home extends React.Component{
  componentDidMount() {
    this.props.getTopAlbums();
    console.log(this.props.albums);
  }
    render(){
      console.log(this.props);
      if (this.props.albums.isLoading) {
          return <Loader />
      } else if (this.props.albums.error) {
          return <p>Error al obtener los datos</p>
      }else if(this.props.albums !== undefined){
        
        console.log(this.props.albums);
        return (
          <div>
            <div className='TopAlbums'>
              <h1>Top exitos</h1>
            </div>
            <div className='Lista' >
               <ul>
                  { this.props.albums.albums.map((album) => (
                  <li key={album.id}>
                    <div className='infoA'>
                      <div className='Cover'>
                        <img className="cover" alt="" src={"http://localhost:3001"+album.cover}/> 
                      </div>
                      <b>{'Nombre: ' + album.name}</b><br></br>{' Id: '+ album.id}                      
                    </div>
                  </li>
                        ))}
                </ul>
            </div>
          <div className='homeFooter'>
            <hr></hr>
            <p> Ya puedes descubir las últimas novedades 
            <NavLink  to="/musica" style={{color: '#660066', textDecoration: 'inherit'}} activeStyle={{color: 'red', textDecoration: 'none'}} > Aquí</NavLink>
            </p>

            </div>
            </div>
            
          )
        }else{
          return <Loader />
      }
      }
};
const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  getTopAlbums: () => dispatch(getTopAlbums())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
