import React from 'react';
import {NavLink}  from "react-router-dom";
import { connect } from "react-redux";
import {  getAlbums } from '../storeMusic/StoreMusic';
import Loader from '../Menu/Loader';




class Album extends React.Component{
     componentDidMount() {
         this.props.getAlbums();
        //  console.log(this.props);
        //  this.props.getAlbumById(this.props);
        //  this.props.getSongsByAlbum(this.props);
       
     }

    render(){
        console.log(this.props);
        if (this.props.albums.isLoading) {
            return <Loader />
        } else if (this.props.albums.error) {
            return <p>Error al obtener los datos</p>
        }else if(this.props.albums !== undefined){
            // const Aaa = ({ albums }) => {

                
                return(
                    <ul>
                        { this.props.albums.albums.map((album) => (
                        <li key={album.id}>
                            {'Nombre: ' + album.name}{'Id: '+ album.id}
                            <img className="cover" alt="" src={album.cover} /> 
                            <NavLink activeClassName="active" to={"/canciones/"+album.id} >{album.name}</NavLink>
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