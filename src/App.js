import './App.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState(false)
  const [filter, setFilter] = useState('')
  const [movieList, setMovieList] = useState([])

  const handleInputChange = (event) => {
    // switch(filter) {
    //   case 'Movie\'s name':
    //     axios()
    // }
    if (event.target.value !== '') {
      setSearch(true)
    } else {
      setSearch(false)
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
          <option value='get_movies_by_movie_name'>Movie's name</option>
          <option value='get_movies_by_genre'>Genre</option>
          <option value='get_movies_by_year_release'>Released year</option>
          <option value='get_movies_feat_name'>Actor</option>
        </select>
      </header>
      <body className='App-body'>
        <div className={window.location == '/' && 'hide'}>Please enter your desired movie choice</div>
      </body>
    </div>
  );
}

export default App;
