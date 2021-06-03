import React from 'react';
import { useSelector } from 'react-redux';
import Entry from './components/entry';
import EntryForm from './components/entryForm';
import './stylesheets/App.css';

function App() {

  const entryList = useSelector(state => state.entries.entries);

  const renderedEntryList = entryList.map((entry, i) => (
    <li key={i}>
      <Entry songTitle={entry.songTitle} artist={entry.artist} country={entry.country} rank={i + 1} />
    </li>
  ));

  return(
    <div>
      <header>
        <h1>Build Your Own Eurovision Rankings Predictions</h1>
      </header>
      <EntryForm />
      <ul>
        {renderedEntryList}
      </ul>
    </div>
  );
}

export default App;