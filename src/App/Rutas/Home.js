import React from "react";
import {  BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import { connect } from "react-redux";
import {getTopAlbums}  from '../storeMusic/StoreMusic';
import Loader from '../Menu/Loader';


class Home extends React.Component{
  componentDidMount() {
    this.props.getTopAlbums();
    console.log("Mira aqui");
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
            <div>
              <h1>Top exitos</h1>
            </div>
            <div>
               <ul>
                  { this.props.albums.albums.map((album) => (
                  <li key={album.id}>
                    {'Nombre: ' + album.name}{'Id: '+ album.id}
                    <img className="cover" src={album.cover}/> 
                  </li>
                        ))}
                </ul>
            </div>
          <div>
            <hr></hr>
            <h3> Ya puedes descubir las últimas novedades</h3>
            <NavLink  to="/musica" style={{color: '#660066', textDecoration: 'inherit'}} activeStyle={{color: 'red', textDecoration: 'none'}} >Música</NavLink>
                 

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
