import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import { fetchMovies } from '../../api/apiCalls';

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
        <NavBar />
      </div>
    );
  }
}

export default App;
