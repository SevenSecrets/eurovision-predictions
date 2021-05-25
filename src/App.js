import React, { Component } from 'react';
import Entry from './components/entry';
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
        <Entry songTitle='SHUM' artist='Go_A' country='Ukraine' rank="1" />
      </div>
    );
  }
}

export default App;