import React, { Component } from 'react';
import '../stylesheets/entry.css';

class Entry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songTitle: props.songTitle,
            artist: props.artist,
            country: props.country,
            rank: props.rank
        };
    }
    render() {
        return(
            <div className='Entry' data-testid='entry' >
                <div className='country'><h2>{this.state.country}</h2></div>
                <div className='song-title'><h2>Song: {this.state.songTitle}</h2></div>
                <div className='artist'><h2>Artist: {this.state.artist}</h2></div>
                <div className='rank'><h2>#{this.state.rank}</h2></div>
            </div>
        );
    }
}

export default Entry;