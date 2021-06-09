import axios from 'axios';

// action variables

export const FETCH_ANIME_START = 'FETCH_ANIME_START';
export const FETCH_ANIME_SUCCESS = 'FETCH_ANIME_SUCCESS';
export const FETCH_ANIME_FAILURE = 'FETCH_ANIME_FAILURE';

// action creator axios request

export const fetchAnime = (name) => dispatch => {
    dispatch({ type:FETCH_ANIME_START});
    axios 
        .get(`https://api.jikan.moe/v3/search/anime?q=${name}`)
        .then((response)=>{
            dispatch({ type:FETCH_ANIME_SUCCESS, payload: response.data.results});
        })
        .catch(err => {
            console.log(err)
            dispatch({ type:FETCH_ANIME_FAILURE, payload:err});
        });
}
