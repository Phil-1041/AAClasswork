import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions'
import { fetchAllPokemon } from './util/api_unil';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';


// document.addEventListener('DOMContentLoaded', () => {
//   const rootEl = document.getElementById('root');
//   window.receiveAllPokemon = receiveAllPokemon;
//   window.fetchAllPokemon = fetchAllPokemon;
//   window.requestAllPokemon = requestAllPokemon;
//   const store = new configureStore();
//   window.getState = store.getState;
//   window.dispatch = store.dispatch;
//   window.selectAllPokemon = selectAllPokemon;
//   ReactDOM.render(<h1>Pokedex</h1>, rootEl);
// });

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
