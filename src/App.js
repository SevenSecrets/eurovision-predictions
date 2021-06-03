import React from 'react';
import Entry from './components/entry';
import EntryForm from './components/entryForm';
import './stylesheets/App.css';

function App(props) {
  return(
    <div>
      <header>
        <h1>Build Your Own Eurovision Rankings Predictions</h1>
      </header>
      <EntryForm />
    </div>
  );
}

export default App;