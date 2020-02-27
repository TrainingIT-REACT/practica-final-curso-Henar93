import React from 'react';
import {NavLink}  from "react-router-dom";

import { connect } from "react-redux";

import { getSongsByAlbum, getAlbums } from '../storeMusic/StoreMusic';
import { getAlbumById } from '../storeMusic/StoreMusic';

import Loader from '../Menu/Loader';

class Canciones extends React.Component {
    componentDidMount() {
        this.props.getAlbumById(this.props.match.params.id);
        this.props.getSongsByAlbum(this.props.match.params.id);
    }

    render(){
        console.log('a');        
        console.log(this.props.albums.songs);
        if (this.props.albums.isLoading) {
            return <Loader />
        } else if (this.props.albums.error) {
            return <p>Error al obtener los datos</p>   
        } else if(this.props.albums.album !== undefined && this.props.albums.album != null
            && this.props.albums.songs !== undefined) {    
            let album = this.props.albums.album;
            let songs = this.props.albums.songs;
            return(
                <div>
                    <h1>{album.name}</h1>
                    <div>
                    <ul>
                        { songs.map((song) => (
                        <li key={song.id}>
                            <NavLink activeClassName="active" to={"/rep/"+song.id} >{song.name}</NavLink>
                            {' ['+ song.seconds + 's ]'}
                        </li>
                        ))}
                    </ul>
                    </div>
                    <div><img className="cover" src={album.cover}/></div>
                </div>
            )
        } else {
            return <Loader/>
        }    
    }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
    getAlbumById: (id) => dispatch(getAlbumById(id)),
    getSongsByAlbum: (id) => dispatch(getSongsByAlbum(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Canciones);