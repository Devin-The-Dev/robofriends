import logo from './logo.svg';
import './App.css';
// This is required for the class
import React from 'react';

// Instead of using a hook, 'App()', we're going use a class because they've been around longer and universally used in other languages. 
// Hooks are React specific
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
