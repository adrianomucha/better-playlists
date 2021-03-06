import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#191414'
};

let fakeServerData = {
  user: {
    name: 'Adrian',
    playlists: [
      {
        name: 'My Favorites',
        songs: ['Beat It', 'Rain', 'Canneloni Makaroni'],
      }
      {
        name: 'Most Necessary',
        songs: ['Plug Walk', 'Outside Today', 'Thousand Ways'],
      }
      {
        name: 'Lush Lofi',
        songs: ['Aqua Skies', 'Faith', 'Blooming'],
      }
    ]
  }
};

class Aggregate extends Component {
  render(){
    return (
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render(){
    return (
      <div style = {defaultStyle}>
        <img/>
        <input type="text"/>
      </div>
    );
  }
}

class Playlist extends Component {
  render(){
    return (
      <div style = {{...defaultStyle, width:'25%', display: 'inline-block'}}>
        <img/>
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {serverData: {}}
  }
  componentDidMount() {
    this.setState({serverData: fakeServerData});
  }
  render() {
    return (
      <div className="App">
        <h1 style = {{...defaultStyle, 'font-size': '54px', 'color': '#1db954'}}>
        {this.state.serverData.user &&
         this.state.serverData.user.name}s Playlist.
        </h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
