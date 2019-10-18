import React from 'react';

import GenreSelection from '../GenreSelection';

export default function Movies(props) {
    return (
        <>
            <h1>MOVIES LIST</h1>

            {
                props.data.map((movie, i) => (
                    
                    <h3>{ movie.name }</h3>
                ))
            }

            <GenreSelection 
                onGenreSelect={ props.onGenreSelect }
            />

        </>
        
    )
}