import { useEffect, useState } from 'react';

export default function Relogio() {
    const [clock, setClock] = useState('')
    useEffect(() => {
        const moment = require('moment-timezone')

        let interval = setInterval(() => {
            let localtime = moment().tz("America/Bahia").format('HH:mm:ss').toString()
            setClock(localtime)
        }, 1000)
        
        return () => { clearInterval(interval) }
    }, [clock])

    return (
        <div className="relogio">
            <h1 className="title_relogio">Relógio</h1>
            <h2 className="tempo">{ clock }</h2>
        </div>
    )
}