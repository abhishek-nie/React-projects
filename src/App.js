import React from 'react';

import './App.css';
import Header from './components/Header';
import ListGitHub from './components/ListGitHub';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ListGitHub></ListGitHub>
    </div>
  );
}

export default App;
