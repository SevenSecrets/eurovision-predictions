import React, { Component } from 'react';

class EntryForm extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div className="EntryForm">
                <form onSubmit={this.handleSubmit} >
                    <h3>Add New Entry:</h3>
                    <label>
                        Song Title: 
                        <input type='text' name='song-title'/>
                    </label>
                    <label>
                        Artist: 
                        <input type='text' name='artist'/>
                    </label>
                    <label>
                        Country: 
                        <select>
                            <option value='' ></option>
                        </select>
                    </label>
                    <input type='submit' value='Submit' data-testid='form-submit' />
                </form>
            </div>
        );
    }
}

export default EntryForm