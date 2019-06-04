import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'Boom Diggy', Duration: '4.05 sec' },
        { title: 'Maol chudiyaa', Duration: '4.05 sec' },
        { title: 'Bol chudia', Duration: '4.05 sec' },
        { title: 'Pal', Duration: '4.05 sec' },
        
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});
