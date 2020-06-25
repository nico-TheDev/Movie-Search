import React, { useState } from "react";
import MovieCard from "./MovieCard";

export default function SearchMovies() {
    const [query, setQuery] = useState("");
    let [movies, setMovies] = useState([]);
    let [isLoading, setLoading] = useState(false);

    const searchMovies = async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=8de0aa83cbd229a4fe1edec663d0235d&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            setLoading(true);
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
            console.log(movies);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    const loaderStyle = {
        fontSize: "3rem",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        display: isLoading ? "block" : "none",
    };

    return (
        <>
            <form className="form" onSubmit={searchMovies} >
                <div className="form-field">
                    <input
                        type="text"
                        placeholder="Search for movies..."
                        id="query"
                        name="query"
                        className="search-input"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                <button className="submit" type="submit">
                    {" "}
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </form>
            <ul className="movie-list" style={{marginTop:isLoading ? '3rem' : '0'}}>
                <h2 style={loaderStyle}>LOADING...</h2>
                {movies.filter(item => item.poster_path).map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
        </>
    );
}
