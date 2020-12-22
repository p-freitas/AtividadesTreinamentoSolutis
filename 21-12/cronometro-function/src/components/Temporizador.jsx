import { useState, useRef } from 'react'

const Temporizador = () => {
  const [segundos, setSegundos] = useState(0)
  const [minutos, setMinutos] = useState(5)
  const [pause, setPause] = useState(false)
  const inputSegundos = useRef(null)
  const inputMinutos = useRef(null)

  const iniciarTemporizador = () => {
    setTimeout(() => {
      if(segundos > 0 ){
        setSegundos(segundos-1)
      }
      if(segundos === 0){
        setSegundos(59)
        setMinutos(minutos-1)
      }
    }, 1000);
    limparCampos()
  }

  const togglePause = () => {
    setPause(pause => !pause)
  }

  const limparCampos = () => {
    inputMinutos.current.value = ''
    inputSegundos.current.value = ''
  }
  
  const handleSecondsChange = (e) => setSegundos(e.target.value);
  const handleMinutesChange = (e) => setMinutos(e.target.value);
  
    return (
        <div className='temporizador'>
            <h1>Temporizador</h1>
            <h2>{minutos}:{segundos}</h2>
            <input ref={inputMinutos} onChange={e => handleMinutesChange(e)} placeholder='MM'/> :
            <input ref={inputSegundos} onChange={e => handleSecondsChange(e)} placeholder='SS'/> <br /><br />
            <button onClick={pause ? iniciarTemporizador() : togglePause} >Iniciar</button>
        </div>
    )
}
export default Temporizador;