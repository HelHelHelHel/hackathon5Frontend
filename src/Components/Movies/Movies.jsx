import React from 'react';

import GenreSelection from '../GenreSelection';

export default function Movies(props) {
    return (
        <>
            <h1>MOVIES LIST</h1>

            {
                props.data.map((movie, i) => (
                <>    
                    <div className="movie_list">
                        <div className="movie_info">
                            <img className="poster" src={ movie.poster_url } />
                            <h3>{ movie.name }</h3>
                            <h6>{ movie.year}</h6>
                            <p>{ movie.rating} </p>
                        </div>
                    </div>
                </>    
                ))
            }

            <GenreSelection 
                onGenreSelect={ props.onGenreSelect }
            />

        </>
        
    )
}