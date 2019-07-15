import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recentMovies: []
    }
  }
  async componentDidMount() {
    // const url = 'http://localhost:3000'
    try {
      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=044b86cc1259591cb5a872bda8d25edd&language=en-US&page=1`)
      .then(res => res.json())
      .then(recentMovies => this.setState({ recentMovies }))
    } catch (error) {
      console.log(error.message)
    }
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
