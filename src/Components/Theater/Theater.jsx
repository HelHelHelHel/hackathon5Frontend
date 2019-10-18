import React from 'react';
import Header from '../Header';
import NowPlaying from '../NowPlaying';
import PlayingToday from '../PlayingToday';
import UpcomingMovies from '../UpcomingMovies';

export default function Theater(props) {
    return (
        <>
            <Header 
                slug={ props.slug }
            />

            <h1>{ props.data.name }</h1>
            <p>{ props.data.address }</p>
            <p>{ props.data.url }</p>
            <p>{ props.data.opens_at }</p>
            <p>{ props.data.closes_at }</p>

            <div className="page__columns">

                <main>
                    <PlayingToday />

                    <UpcomingMovies />
                </main>

                <aside>

                    <NowPlaying />
                    
                </aside>

            </div>
        </>
        
    )
}