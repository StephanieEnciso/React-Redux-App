import React from 'react';
import { connect } from 'react-redux';
import '../css/AnimeList.css'

function AnimeList(props) {
    return (
        <div className = 'animeCards'>
            {props.animes.map((anime) => {
                return (<div key = {anime.id} className = 'anime-card'>
                    <img src = {anime.image_url} alt = {anime.title}/>
                    <h3>Title: {anime.title}</h3>
                    <p>Type:{anime.type}</p>
                    <p>Episodes:{anime.episodes}</p>
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