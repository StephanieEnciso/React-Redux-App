import {FETCH_ANIME_START, FETCH_ANIME_SUCCESS, FETCH_ANIME_FAILURE} from '../actions';

const initialState = {
    animes: [],
    isFetching: false,
    error: '',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_ANIME_START):
            return({
                ...state,
                animes: [],
                isFetching: true,
                error: '',
            });
        case(FETCH_ANIME_SUCCESS):
            return({
                ...state,
                animes: [...state.animes, action.payload],
                isFetching: false,
                error: '',
            });
        case(FETCH_ANIME_FAILURE):
            return({
                ...state,
                animes: [],
                isFetching: false,
                error: action.payload,
            });
        default:
            return state;
    }
};