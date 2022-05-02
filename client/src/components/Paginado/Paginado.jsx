import React from 'react';
import s from './Paginado.module.css'

export default function Paginado({countriesPP, countries, paginado}){
    const pNumbers = []

    for (let i=0 ; i<=Math.ceil(countries/countriesPP); i++){
        pNumbers.push(i+1)
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