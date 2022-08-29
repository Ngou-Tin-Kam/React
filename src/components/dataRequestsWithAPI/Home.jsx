import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Films from './Films';

function Home() {
  const location = useLocation();

  console.log('LOC:', location);
  const [search, setSearch] = useState(location?.state?.oldSearch || '');
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (search) {
        const { data: { Search } } = await axios.get(`http://www.omdbapi.com/?apikey=7eb3c923&s=${search}`);
        if (Search) return setFilms(Search);
      }
      return setFilms([]);
    }

    fetchData();
  }, [search]);

  return (
    <>
      <section>
        <label htmlFor="filmsSearch">
          Search:
          <input type="text" id="filmsSearch" value={search} onChange={(e) => setSearch(e.target.value)} />
        </label>
      </section>
      <section>
        {films.map(({ imdbID, Title, Year }) => (
          <Films
            key={imdbID}
            id={imdbID}
            title={Title}
            year={Year}
            search={search}
          />
        ))}
      </section>
    </>
  );
}

export default Home;