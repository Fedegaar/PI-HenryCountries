import React from 'react'
import { Link } from 'react-router-dom'
import s from './CountryCard.module.css'

function CountryCard({name, continent, img, id}) {
    return (
    <div className={s.Cardback}>


        <div className={s.Nombre}>
            <Link to={`/countries/detail/${id}`} className={s.Nombre}><span>{name}</span></Link>
        </div>


        <div className={s.Continente}>
            <p>{"Continent: "}{continent}</p>        
        </div>


        <div >
            <img className={s.Image} width={275} height={175} src={img} alt={"IMG NOT FOUND"}/>
        </div>


    </div>
  )
}

export default CountryCard
