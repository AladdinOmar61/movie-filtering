import React from 'react'
import { useState, useEffect } from 'react'
import Movies from './components/Movies'
import SearchBar from './components/SearchBar'
import movieData from './utils/movies'


function App() {

  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const [maxLen, setMaxLen] = useState(0)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    setMovies(movieData.filter(movie => {
      return (movie.title.toUpperCase().includes(search.toUpperCase())) && 
      ([NaN,0].includes(parseInt(maxLen, 10)) || parseInt(maxLen,10) >= movie.length);
    }));

  }, [search, maxLen]);

  return (
    <>
      {/* {Header bar for searching} */}
      <SearchBar 
      search={search} 
      setSearch={setSearch} 
      maxLen={maxLen} 
      setMaxLen={setMaxLen}
      movies={movies}
      clicked={clicked}
      setClicked={setClicked}
      />
      {/* {Output for Movies} */}
      <Movies movies={movies} clicked={clicked}/>
    </>
  )
}

export default App;
