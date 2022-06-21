import React from 'react'
import { Link } from 'react-router-dom'
import s from './CountryCard.module.css'

function CountryCard({name, continent, img, id}) {
    return (
    <Link to={`/countries/detail/${id}`}>
    <div className={s.Cardback}>


        <div className={s.Nombre}>
            <span className={s.Nombre}>{name}</span>
        </div>


        <div className={s.Continente}>
            <p>{"Continent: "}{continent}</p>        
        </div>


        <div >
            <img className={s.Image} width={275} height={175} src={img} alt={"IMG NOT FOUND"}/>
        </div>


    </div>
    </Link>
  )
}

export default CountryCard
