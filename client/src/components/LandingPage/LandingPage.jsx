import React from 'react'
import s from './LandingPage.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getActivities, getCountries } from '../../redux/actions'

function LandingPage() {

  const dispatch = useDispatch();

  useEffect(() => {  
    dispatch(getCountries())  
    dispatch(getActivities())
  },[dispatch,])

  return (
    <div className={s.divMayor}>
        <div className={s.Titulo}>
            <span>Bienvenidxs</span>
        </div>
        <hr width={"800px"} />
        <div className={s.ubiBtn}>    
            <Link to = {'/home'}> <button className={s.stiBtn}>¡ENTER!</button></Link>
        </div>
        <hr width={"800px"} />  
    </div>
  )
}

export default LandingPage
