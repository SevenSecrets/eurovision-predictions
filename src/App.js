import React, { Component } from 'react';
import Ranking from './components/ranking';
import './stylesheets/App.css';

class App extends Component {
  render() {
    return(
      <div>
        <header>
          <h1>Build Your Own Eurovision Rankings Predictions</h1>
        </header>
        <Ranking />
      </div>
    );
  }
}

export default App;