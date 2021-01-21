import React, { useState } from 'react';
import { fetchAnime } from '../actions';
import { connect } from 'react-redux';
import AnimeList from './AnimeList';

function SearchForm(props) {
    const [formValue, setformValue] = useState('');

    const changeHandler = (event) => {
        const value = event.target.value;
        setformValue(value);
    };

    const clickHandler = (event) => {
        event.preventDefault();
        props.fetchAnime(formValue);
    }

    if (props.error) {
        return <p>We got an error: {props.error}</p>;
    }
    
    if (props.isFetching) {
        return <p>Fetching your Anime!</p>;
    }


    return(
        <div className = 'searchDiv'>
            <form>
                <input 
                type = 'text'
                value = {formValue}
                placeholder = 'Search for your desired Anime'
                name = 'searchBar'
                onChange = {changeHandler}
                />
                <button onClick = {clickHandler}>Search</button>
            </form>
            <div>
                <AnimeList key = {props.animes}/>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        animes: state.animes,
        isFetching: state.isFetching,
        error: state.error,
    }
}

export default connect(mapStateToProps, {fetchAnime})(SearchForm);