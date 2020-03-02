import React from "react";
import { connect } from "react-redux";

import RepSong from './RepSong';

class HistorySong extends React.Component{
    render(){
        return <div id="history">
            <h2>Canciones escuchadas</h2>
            <div className="songs">
                <p><RepSong/></p>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => ({ ...state });
export default connect(
    mapStateToProps
  )(HistorySong);