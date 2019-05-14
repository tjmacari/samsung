import React from 'react';
import { render } from 'react-dom';

import TmComponent from 'Components/component'; // Useful global methods in parent to avoid redundant code
import TmCarousel from 'Components/carousel/carousel'; // Simple custom carousel react component

// JSON Data
import moviesData from 'Data/data.json'; // Mock data for Star Wars movies

// Root class
class TmApp extends TmComponent {

    constructor(props) {
        super(props); // Init superclass constuctor

        this.state = {
            movies: moviesData.data
        };
    }

    render() {
        return (
            <div>
                {/* Pass state object into carousel */}
                <TmCarousel movies={this.state.movies} />
            </div>
        );
    }
}
export default TmApp;

// Plug this class into 'app' element in index.html
render(
    <TmApp />,
    document.getElementById('app')
);
