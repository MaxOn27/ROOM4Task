import * as actionTypes from './../actions/actionTypes';

const initialState = {
    loading: false,
    songs: {},
    error: ''
}

export const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SONG_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_SONG_SUCCESS:
            return {
                ...state,
                songs: action.payload,
                error: ''
            }
        case actionTypes.FETCH_SONG_FAILURE:
            return {
                loading: false,
                songs: {},
                error: action.payload
            }
        default:
            return state;
    }
}