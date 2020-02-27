import React from 'react';
import { connect } from "react-redux";

import { getSongRep } from '../storeMusic/StoreMusic';
import { getAlbumById } from '../storeMusic/StoreMusic';

import Loader from '../Menu/Loader';

class Reproductor extends React.Component {
    componentDidMount() {
   
        this.props.getSongRep(this.props.match.params.id);
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
            let songs = this.props.albums.songs;
            return(
                <div>
                    {songs.name}
                    <hr></hr>
                    <audio controls>
                    <source src="/music/funky_energy_loop.mp3" type="audio/mpeg"></source>
                    </audio> 
 
                  
                </div>
            )
        } else {
            return <Loader/>
        }    
    }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
    getSongRep: (id) => dispatch(getSongRep(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Reproductor);