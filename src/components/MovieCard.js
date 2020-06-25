import React from "react";

export default function MovieCard(prop) {
    const { movie } = prop;

    console.log(prop);
    const backgroundStyle = {
        background: movie.backdrop_path
            ? `linear-gradient(to right,rgba(0,0,0,0.7),rgba(0,0,0,0.8)),url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`
            : "black",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const transformSummary = (text) => {
        if (text.length > 320) {
            text = text.slice(0, 320) + "...";
        }

        return text;
    };

    return (
        <li className="movie-card" style={backgroundStyle}>
            <img
                className="movie-card__img"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + "poster"}
            />

            <div className="movie-card__content">
                <h3 className="movie-card__title">{movie.title}</h3>
                <div class="movie-card__details">
                    <p className="movie-card__release-date">
                        Release Date:
                        <span style={{ color: "#3498db" }}>
                            {" "}
                            {movie.release_date}
                        </span>
                    </p>
                    <p className="movie-card__rating">
                        Rating:
                        <span style={{ color: "#3498db" }}>
                            {" "}
                            {movie.vote_average}
                        </span>
                    </p>
                </div>
                <p className="movie-card__description">
                    {transformSummary(movie.overview)}
                </p>
            </div>
        </li>
    );
}
