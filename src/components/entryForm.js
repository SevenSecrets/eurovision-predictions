import React, { Component } from 'react';

class EntryForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            songTitle: '',
            artist: '',
            country: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        console.log('submitted: ' + this.state.songTitle + ' ' + this.state.artist + ' ' + this.state.country);
        e.preventDefault();
    }

    render() {
        return(
            <div className="EntryForm">
                <form onSubmit={this.handleSubmit} >
                    <h3>Add New Entry:</h3>
                    <label>
                        Song Title: 
                        <input type='text' name='songTitle' onChange={ this.handleInputChange } />
                    </label>
                    <br/>
                    <label>
                        Artist: 
                        <input type='text' name='artist' onChange={ this.handleInputChange } />
                    </label>
                    <br/>
                    <label>
                        Country: 
                        <select name='country' onChange={ this.handleInputChange }>
                            <option value='Ukraine' >Ukraine</option>
                        </select>
                    </label>
                    <br/>
                    <input type='submit' value='Submit' data-testid='form-submit' />
                </form>
            </div>
        );
    }
}

export default EntryForm