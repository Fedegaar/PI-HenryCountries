import React from 'react'
import s from './LandingPage.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCountries } from '../../redux/actions'

function LandingPage() {

  const dispatch = useDispatch();

  useEffect(() => {    
    dispatch(getCountries())
  },[dispatch,])

  return (
    <div className={s.divMayor}>
        <div className={s.Titulo}>
            <span>Bienvenidxs</span>
        </div>
        <div className={s.ubiBtn}>    
            <Link to = {'/home'}> <button className={s.stiBtn}>¡ENTER!</button></Link>
        </div>
    </div>
  )
}

export default LandingPage
