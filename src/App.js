import './App.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function App() {


  const [input, setInput] = useState('')
  const [search, setSearch] = useState(false)
  const [filter, setFilter] = useState('')
  const [movieList, setMovieList] = useState([])

  const MOVIENAME = 'get_movies_by_movie_name'
  const MOVIEGENRE = 'get_movies_by_genre'
  const MOVIEYEARELEASE = 'get_movies_by_year_release'
  const MOVIECREW = 'get_movies_feat_name'

  const handleInputChange = (event) => {
    setInput(event.target.value)
    if (event.target.value !== '') {
      setSearch(true)
    } else {
      setSearch(false)
    }
  }

  const handleInputEnter = (event) => {
    if (event.key === 'Enter') {
      console.log(event.key)
      axios(`http://localhost:3001/api/${MOVIENAME}?movie_name=${input}`)
          .then(res => {
            console.log(res.data)
          })  
      // switch(filter) {
      //   case MOVIENAME:
          
      //     })
      // }
    }
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='App-logo'>
          DBMS
        </div>
        <div className='App-searchcontainer'>
          <input
            className='App-searchfield'
            type='text'
            placeholder='Enter...'
            onChange={handleInputChange}
            onKeyDown={handleInputEnter}
          />
          <span className='App-searchicon'>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
          </span>
          <div className='border'></div>
          <div className='App-resultlist'>
            <ul className={!search && 'inactive'}>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
            </ul>
          </div>
        </div>
        <select id='filter' onChange={handleFilterChange}>
          <option value={MOVIENAME}>Movie's name</option>
          <option value={MOVIEGENRE}>Genre</option>
          <option value={MOVIEYEARELEASE}>Released year</option>
          <option value={MOVIECREW}>Actor</option>
        </select>
      </header>
      <body className='App-body'>
        <div className={window.location === '/' && 'hide'}>Please enter your desired movie choice</div>
      </body>
    </div>
  );
}

export default App;
