import React from 'react';
import './App.css';


const Relogio = (props) => (
  <div>
    <h1 class="title-relogio">Relógio</h1>
    <h1 class="relogio">{props.relogio}</h1>
  </div>
)

export default Relogio