import { useState, useEffect } from 'react';
import Parcials from './Parcials'

export default function Cronometro() {
    const [centesimos, setCentesimos] = useState(0)
    const [pause, setPause] = useState(true)
    const [partials, setPartials] = useState([])
  
    useEffect(() => { 
        let interval;
        if(!pause) {
            interval = setInterval(() => {
              setCentesimos(centesimos => centesimos + 1)
                    }, 10) }
        return () => { clearInterval(interval) }
    }, [pause, centesimos])

    const togglePause = () => {
        setPause(pause => !pause);
    }
  
    const zerar = () => {
        setCentesimos(0)
        setPartials([])
    }

    const minutos = () => {
      return Math.floor(centesimos/6000);
    }
  
    const segundos = () => {
      return Math.floor(centesimos/100 % 60);
    }
  
    const parcial = () => {
      let p = <li>{minutos() + ":" + segundos() + ":" + centesimos%100 + "\n\n"}</li>
      setPartials(partials => [...partials, p]);
    } 
    
    return (
        <>
            <div className="cronometro">
                <h1>Cronômetro</h1>
                <h2>{minutos()}:{segundos()}:{centesimos%100}</h2>
                <button onClick={togglePause}>{ pause ? 'Iniciar' : 'Pausar' }</button>
                <button onClick={zerar}>Zerar</button>
                <button onClick={parcial}>Parcial</button>
            </div>
            <Parcials partials={partials} /> 
        </>
    )
}