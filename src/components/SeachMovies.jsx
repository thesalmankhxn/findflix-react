import React, { useState } from 'react';
import MovieCard from './MovieCard';

export default function SeachMovies(props) {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=aafab5d2de2e5bf85ee7f00553ca7840&language=en-US&query=${query}`;

        try{
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        } catch(err) {
            console.log(err);
        }
    }
    
    return (
        <div>
            <form className='form' onSubmit={searchMovies}>
                <label htmlFor='query' className='label'>Search Movie</label>
                <input type='text' name='query' placeholder='i.e. Shawshank Redemption' 
                    className='input' 
                    value={query}
                    onChange={ (e) => setQuery(e.target.value)}
                    />
                <button type="submit" className='button'>Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}
