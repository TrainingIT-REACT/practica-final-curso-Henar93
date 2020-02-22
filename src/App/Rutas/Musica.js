import React from 'react';
import {NavLink}  from "react-router-dom";

import { connect } from "react-redux";

import { getSongsByAlbum, getAlbums } from '../storeMusic/StoreMusic';
import { getAlbumById } from '../storeMusic/StoreMusic';

import Loader from '../Menu/Loader';


class Album extends React.Component{
     componentDidMount() {
         this.props.getAlbums();
        //  console.log(this.props);
        //  this.props.getAlbumById(this.props);
        //  this.props.getSongsByAlbum(this.props);
    
     }

    render(){
        if (this.props.albums.isLoading) {
            return <Loader />
        } else if (this.props.albums.error) {
            return <p>Error al obtener los datos</p>
        }else if(this.props.albums != undefined){
            // const Aaa = ({ albums }) => {
                return <ul>
                    { this.props.albums.albums.map((album) => (
                    <li key={album.id}>
                        {'Nombre: ' + album.name}{'Id: '+ album.id}
                        
                        <img className="cover" src={album.cover}/> 
                        <NavLink activeClassName="active" to={"/album/"+album.id} >{album.name}</NavLink>
                    </li>
                    ))}
                </ul>
            //   }

            //   return <Aaa albums={this.props.albums.albums} />;
                // <link to={"/album/"+album.id} classsName="album" key={album.id}>
                //     <div ClasssName="img">
                //         <img src={album.cover} alt="Imagen del album" title="im"/>
                //     </div>
                //     <div className="title">{album.name}</div>
                // </link>
            // });
        
        // } else if (this.props.albums.songs && this.props.albums.album) {
        //     console.log('este');
        //     return <div className="album">
        //         <div className="header">
        //             <div className="image">
        //                 <img src={album.cover} alt="Imagen del álbum" title="Imagen del álbum" />
        //             </div>
        //             <div className="data">
        //                 <h2 className="title">{album.name}</h2>
        //                 <h3 className="author">De <i>{album.artist}</i></h3>
        //                  <div className="songs">Nº canciones: {songs.lenkgth}</div> 
        //             </div>
        //         </div>
        //          {/* <Songs data={songs} album={album.name}/> */}
        //     </div>
        } else{
            return <Loader />
        }
    }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
    getAlbums: () => dispatch(getAlbums()),
    getAlbumById: (id) => dispatch(getAlbumById(id)),
    getSongsByAlbum: (id) => dispatch(getSongsByAlbum(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Album);