import React, { Component } from 'react';
import Entry from './entry';
import '../stylesheets/entryForm.css'

class EntryForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            songTitle: '',
            artist: '',
            country: '',
            entries: []
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        console.log('submitted: ' + e.target);

        e.preventDefault();
    }

    render() {
        return(
            <div className="EntryForm">
                <form onSubmit={this.handleSubmit} >
                    <h2 className='form-title'>Add New Entry:</h2>
                    <label className='song-title-input'>
                        Song Title: 
                        <input type='text' name='songTitle' onChange={ this.handleInputChange } />
                    </label>
                    <label className='artist-input'>
                        Artist: 
                        <input type='text' name='artist' onChange={ this.handleInputChange } />
                    </label>
                    <label className='country-input'>
                        Country: 
                        <select name='country' onChange={ this.handleInputChange }>
                            {/* TODO: extract this list to reduce clutter */}
                            <option value='Albania' >Albania</option>
                            <option value='Australia' >Australia</option>
                            <option value='Austria' >Austria</option>
                            <option value='Azerbaijan' >Azerbaijan</option>
                            <option value='Belgium' >Belgium</option>
                            <option value='Bulgaria' >Bulgaria</option>
                            <option value='Croatia' >Croatia</option>
                            <option value='Cyprus' >Cyprus</option>
                            <option value='Czechia' >Czechia</option>
                            <option value='Denmark' >Denmark</option>
                            <option value='Estonia' >Estonia</option>
                            <option value='Finland' >Finland</option>
                            <option value='France' >France</option>
                            <option value='Georgia' >Georgia</option>
                            <option value='Germany' >Germany</option>
                            <option value='Greece' >Greece</option>
                            <option value='Iceland' >Iceland</option>
                            <option value='Ireland' >Ireland</option>
                            <option value='Israel' >Israel</option>
                            <option value='Italy' >Italy</option>
                            <option value='Latvia' >Latvia</option>
                            <option value='Lithuania' >Lithuania</option>
                            <option value='Malta' >Malta</option>
                            <option value='Moldova' >Moldova</option>
                            <option value='Netherlands' >Netherlands</option>
                            <option value='North Macedonia' >North Macedonia</option>
                            <option value='Norway' >Norway</option>
                            <option value='Poland' >Poland</option>
                            <option value='Portugal' >Portugal</option>
                            <option value='Romania' >Romania</option>
                            <option value='Russia' >Russia</option>
                            <option value='San Marino' >San Marino</option>
                            <option value='Serbia' >Serbia</option>
                            <option value='Slovenia' >Slovenia</option>
                            <option value='Spain' >Spain</option>
                            <option value='Sweden' >Sweden</option>
                            <option value='Switzerland' >Switzerland</option>
                            <option value='Ukraine' >Ukraine</option>
                            <option value='United Kingdom' >United Kingdom</option>
                        </select>
                    </label>
                    <input className='submit' type='submit' value='Add' data-testid='form-submit' />
                </form>
                <div className='entries' >
                    <ul>
                        {this.state.entries.map((entry, i) => 
                            <li key={i}>
                                <Entry songTitle={entry.songTitle} artist={entry.artist} country={entry.country} rank={i} />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default EntryForm