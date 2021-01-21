import React from 'react';
import { connect } from 'react-redux';

function AnimeList(props) {
    return (
        <div>
            {props.animes.map((anime) => {
                return (<div key = {anime.id} className = 'anime-card'>
                    <img src = {anime.image_url} alt = {anime.title}/>
                    <h3>{anime.title}</h3>
                    <p>{anime.type}</p>
                    <p>{anime.episodes}</p>
                </div>)
            })}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        animes: state.animes,
    }
}

export default connect(mapStateToProps)(AnimeList);