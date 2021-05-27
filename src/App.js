import React, { Component } from 'react';
import EntryForm from './components/entryForm';
import './stylesheets/App.css';

class App extends Component {
  render() {
    return(
      <div>
        <header>
          <h1>Build Your Own Eurovision Rankings Predictions</h1>
        </header>
        <EntryForm />
      </div>
    );
  }
}

export default App;