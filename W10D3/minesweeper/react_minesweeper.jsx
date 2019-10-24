import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';
import Board from './components/board';
import Tile from './components/tile';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Game/>, root);
});