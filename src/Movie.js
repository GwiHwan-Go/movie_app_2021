import React from "react";
import propTypes from 'prop-types';
import "./Movie.css";
import "./more_btn";

function Movie({id, year, title, summary, poster, genres}){
    return ( 
    <div className="movie">
        <div className="imgAndgenre">
            <img src={poster} alt={title}></img>
            <ul className="movie__genres_list">
                {genres.map((genre,index)=> (
                <li key={index} className="movie__genres">
                    {genre}
                </li>))}
            </ul>
        </div>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <span className="movie__summary">{summary.slice(0,140)},,,</span>
            <button className="moreBtn">more</button>
            
        </div>
    </div>
    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
}

console.log('btn');
export default Movie;