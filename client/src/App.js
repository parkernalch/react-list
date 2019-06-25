import React from 'react';
import AppNavbar from './components/AppNavbar';
import CharacterList from './components/CharacterList';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <CharacterList />
    </div>
  );
}

export default App;
