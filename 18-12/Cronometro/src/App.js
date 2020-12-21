import React from 'react';
import Contador from './Contador'
import Botao from './Botao'
import LabelRelogio from './LabelRelogio'
import './App.css';
import Relogio from './Relogio';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      segundos: 0,
      minutos: 0,
      centesimos: 0,
      horas: 0,
      stop: false,
      nameStop: "Stop",
      name: "Parciais", 
      parcial: "",
      relogio: '',
    };
  }
   zerarCronometro() {
      this.state.segundos = 0
      this.state.minutos = 0
      this.state.centesimos = 0
      this.state.parcial = ""
      this.state.horas = 0
   }
  
  parcial(){
    let p = this.state.horas + ":" + this.state.minutos+ ":" + this.state.segundos + ":" + this.state.centesimos + "\n\n"
    this.state.parcial = this.state.parcial + p
  }
  
  pararTempo(){
    this.setState({ 
        stop: !this.state.stop 
      })
    if (this.state.stop)
      this.state.nameStop = "Stop"
    else
      this.state.nameStop = "Start"
  }

  incrementar () {
    if (this.state.stop === false){
      this.setState(
         function (state, props) {
          if (state.centesimos >= 99){
            this.zerarCentesimos();
            this.incrementarSegundo(state);
          }  
          return({ centesimos: state.centesimos +1})
         })
    }
  }

  incrementarSegundo (state) {
    this.setState(() => { 
      if (state.segundos >= 60){
        this.zerarSegundos();
        this.incrementarMinuto(state);
      } 
      return {segundos: state.segundos +1}
    })
  };
  
  incrementarMinuto (state) {
    this.setState(() => { 
      if (state.minutos >= 60){
        this.zerarMinutos();
        this.incrementarHoras(state);
      } 
      return {minutos: state.minutos +1}
    })
  };

  incrementarHoras (state) {
    this.setState(() => { 
      return {horas: state.horas +1}
    })
  };
  
  zerarCentesimos () {
    this.setState({ 
      centesimos: 0
    })
  }

  zerarSegundos () {
    this.setState({ 
      segundos: 0 
    })
  }

  zerarMinutos () {
    this.setState({ 
      minutos: 0 
    })
  }

  relogio(){
    var moment = require('moment-timezone')
    let localTime = moment().tz('America/Bahia').format('HH:mm:ss').toString()
    this.setState({relogio: localTime})
  }

  componentDidMount(){
    this.timer = setInterval(
      () => this.relogio(), 10)
    this.timer = setInterval(
      () => this.incrementar(), 10)
  }
  
  render(){
    return (
      <div>
        <Relogio relogio={this.state.relogio} />
        <div>
          <h1 className='title-cronometro'>Cronômetro</h1>
          <Contador horas={this.state.horas} minutos={this.state.minutos} segundos={this.state.segundos} centesimos={this.state.centesimos}/>
          <Botao onClick={() => this.zerarCronometro()} label={"Zerar"} />
          <Botao onClick={() => this.pararTempo()} label={this.state.nameStop} />
          <Botao onClick={() => this.parcial()} label={"Pacial"} />
          <LabelRelogio name={this.state.name} />
          <LabelRelogio name={this.state.parcial} />
        </div>
        
      </div>
    );
  }
}

export default App;
