import React from 'react';
import './App.css';


const Contador = (props) => (
    <h1 class="contador">{props.horas}:{props.minutos}:{props.segundos}:{props.centesimos}</h1>
)

export default Contador