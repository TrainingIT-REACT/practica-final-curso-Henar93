import React from 'react';
import {NavLink}  from "react-router-dom";
import { connect } from "react-redux";
import {  getAlbums } from '../../storeMusic/StoreMusic';
import Loader from '../../Menu/Loader';
import './Musica.css';



class Album extends React.Component{
     componentDidMount() {
         this.props.getAlbums();
     }

    render(){
        console.log(this.props);
        if (this.props.albums.isLoading) {
            return <Loader />
        } else if (this.props.albums.error) {
            return <p>Error al obtener los datos</p>
        }else if(this.props.albums !== undefined){
                return(
                   
                    <ul id="albumsList">
                        { this.props.albums.albums.map((album) => (
                        <li key={album.id}>
                            <img className="cover" alt="" src={"http://localhost:3001"+album.cover} />
                            <div className="albumDetails"> 
                            {'Id: '+ album.id}<br /><NavLink activeClassName="active" to={"/canciones/"+album.id} >{album.name}</NavLink>
                            </div>
                        </li>
                        ))}
                    </ul>
               
                )

        } else{
            return <Loader />
        }
    }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
    getAlbums: () => dispatch(getAlbums())
 
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Album);