import React, { Component } from 'react';
import './App.css';
import { fetchMovies } from './apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recentMovies: []
    }
  }
  
  async componentDidMount() { 
    await fetchMovies()
      .then(recentMovies => this.setState({ recentMovies }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
