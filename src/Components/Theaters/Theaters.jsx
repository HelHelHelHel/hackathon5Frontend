import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Theaters(props) {
    
    return (

        <>
            <h1>Welcome to Daydream Cinemas</h1>

            <div className="calltoaction">Please select a theater near you</div>

            <ul>
                {
                    props.data.map((item, i) => (
                        <li>
                            <Link key={i} to={`/${item.slug}`}>{item.name}</Link>
                        </li>
                    ))
                    
                
                }
            </ul>
        </>

    )
}