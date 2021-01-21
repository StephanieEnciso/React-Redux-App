import './css/App.css';
import React from 'react';
import SearchForm from './components/SearchForm';

// https://api.jikan.moe/v3/search/anime?q=FairyTail

function App() {

  return (
    <div className="App">
      <header className = 'App-header'>
      <h1>Find Your Favorite Anime!</h1>
      </header>
     <SearchForm/>
    </div>
  );
}

export default App;
