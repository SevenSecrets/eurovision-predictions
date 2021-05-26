import React, { Component } from 'react';
import EntryForm from './entryForm';
import Entry from './entry';

class Ranking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entries: []
        }
    }

    render() {
        return(
            <div className="Ranking" >
                <EntryForm entries={this.state.entries} />
                <ul>
                    {
                        this.state.entries.map((entry, i) => 
                            <li key={i}>
                                <Entry songTitle={entry.songTitle} artist={entry.artist} country={entry.country} rank={i} />
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Ranking;