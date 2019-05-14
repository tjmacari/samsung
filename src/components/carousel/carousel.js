import React from 'react';
import TmComponent from 'Components/component';
import './carousel.scss';

/**
 * Simple carousel driven by keyboard left/right arrow input
 */
class TmCarousel extends TmComponent {

    constructor(props) {
        super(props);

        // Default to slide index 0
        this.state = {
            index: 0
        };
        
        // Listen for keyboard input
        document.addEventListener("keydown", (e) => this._update(e));
    }

    _update(e) {
        // Calculate index
        let index = this.state.index;
        const len = this.props.movies.length;
        if(e.key === "ArrowRight") {
            index++;
            if(index === len) {
                index = 0;
            }
        } else if(e.key === "ArrowLeft") {
            index--;
            if(index < 0) {
                index = len - 1;
            }
        }

        const windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        console.log(windowWidth);

        // Adjust carousel horizontal position
        const imgSize = (windowWidth > 1450) ? 344 : 168; // Slide width differs based on media query
        const marginLeft = -(index * (imgSize));
        const slides = document.querySelector('.slides');
        slides.style.marginLeft = `${marginLeft}px`;

        // Apply new index to state
        this.setState({
            index
        });
    }

    _populateSlide(movie, index) {
        return `slide ${movie.id} ${index === this.state.index ? "active" : ""}`;
    }

    render() {
        const movies = this.props.movies;

        return (
            <div className={`carousel ${movies[this.state.index].id}`}>
                {/* Movie details - title, desc, etc. */}
                <div className="info">
                    <div className="title">{movies[this.state.index].title}</div>
                    <div className="inline-text block">{movies[this.state.index].desc}</div>
                    <div className="inline-text">{movies[this.state.index].year}</div>
                    <div className="inline-text">{`(${movies[this.state.index].rated})`}</div>
                    <div className="actors block">
                    {
                        movies[this.state.index].stars.map((actor, index) => (
                            <div className="inline-text" key={index}>{actor}</div>
                        ))
                    }
                    </div>
                </div>

                {/* Loop through movies array to create each slide */}
                <div className="slides">
                {
                    movies.map((movie, index) => (
                        // Add 'active' class if slide index matches current state index
                        <div key={index} className={this._populateSlide(movie, index)}></div>
                    ))
                }
                </div>
            </div>
        );
    }
}
export default TmCarousel;
