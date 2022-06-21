import React from 'react';
import s from './Paginado.module.css'

export default function Paginado({ paginado, countries }){
    const pNumbers = []

    for (let i=1 ; i<= Math.ceil(countries/10); i++){
        pNumbers.push(i)
    }

    return (
        <div className={s.Contenedor}>
            <nav className={s.Nav}>
                <ul className={s.Pag}>
                    {pNumbers &&
                    pNumbers.map(num => (
                        <li key={num} className={s.Li}>
                            <button className={s.num} onClick={() => paginado(num)} >{num}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}