import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import CharacterList from './components/CharacterList';
import CharacterModal from './components/CharacterModal';

import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from "./actions/authActions";

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  store.dispatch(loadUser());

  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <CharacterModal />
          <CharacterList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
