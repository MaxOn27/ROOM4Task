import axios from 'axios';

import * as actionTypes from './actionTypes';

export const fetchSongRequest = () => {
    return {
        type: actionTypes.FETCH_SONG_REQUEST
    }
}

export const fetchSongSuccess = (songs) => {
    return {
        type: actionTypes.FETCH_SONG_SUCCESS,
        payload: songs
    }
}

export const fetchSongFailure = (error) => {
    return {
        type: actionTypes.FETCH_SONG_FAILURE,
        payload: error
    }
}

export const fetchSongs = () => {
    return (dispatch) => {
        dispatch(fetchSongRequest)
        axios
            .get('http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=c17b1886d9465542a9cd32437c804db6&format=json')
            .then(response => {
                const songs = response.data;
                dispatch(fetchSongSuccess(songs))
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchSongFailure(errorMsg))
            })
    }
}