import React, { Component } from 'react';

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
            <div className="Entry">
                <h2>{this.state.country}</h2>
                <h2>{this.state.songTitle}</h2>
                <h2>{this.state.artist}</h2>
                <h3>#{this.state.rank}</h3>
            </div>
        );
    }
}

export default Entry;