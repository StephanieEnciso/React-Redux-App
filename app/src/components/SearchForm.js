import React, { useState } from 'react';
import { fetchAnime } from '../actions';
import { connect } from 'react-redux';

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
        </div>
    )
};

const mapStateToProps = state => {
    return {
        animes: [state.animes],
        isFetching: state.isFetching,
        error: state.error,
    }
}

export default connect(mapStateToProps, {fetchAnime})(SearchForm);