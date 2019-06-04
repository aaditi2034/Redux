import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSongDetail }) => {
    if(! selectedSongDetail) {
        return <div>Select a Song</div>
    }
    return (
        <div>
            <h3>Detail for:-</h3>
            <p>
                Title: {selectedSongDetail.title} <br/>
                Duration: {selectedSongDetail.Duration}
            </p>
        </div>
    );
};

const mapStateToProps   = state => {
    return { selectedSongDetail: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);

