import React from 'react';
import { connect } from "react-redux";

import { getSongRep } from '../storeMusic/StoreMusic';
import Loader from '../Menu/Loader';

class Reproductor extends React.Component {
    componentDidMount() {
   
        this.props.getSongRep(this.props.match.params.id);
    }

    render(){
        console.log('a');        
        console.log(this.props.albums.song);
        if (this.props.albums.isLoading) {
            return <Loader />
        } else if (this.props.albums.error) {
            return <p>Error al obtener los datos</p>   
        } else if(this.props.albums.song !== undefined && this.props.albums.song !== null) {   
            let song = this.props.albums.song;
            return(
                <div>
                    {song.name}
                    <hr></hr>
                    <audio controls>
                    <source src={song.audio} type="audio/mpeg"></source>
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