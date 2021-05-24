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
            <div className='Entry'>
                <div class='country'>{this.state.country}</div>
                <div class='song-title'>{this.state.songTitle}</div>
                <div class='artist'>{this.state.artist}</div>
                <div class='rank'>{this.state.rank}</div>
            </div>
        );
    }
}

export default Entry;