import React from 'react'
import { Link } from 'react-router-dom'
import s from './Nav.module.css'
import IMG from '../../img/PLANETANAV.png'
import SearchBar from '../SearchBar/SearchBar'

function Nav(props) {
  return (
    <div className={s.DivMayor}>
          
          
          <div className={s.DivImg}>
              <Link to ='/home'><img src={IMG} alt= "HOME"/>              
              </Link>
          </div>



          <div className={s.DivAct}>
              <Link to='/countries/create'><span>Create new activity</span></Link>
          </div>



          <div className={s.DivSearch}>
              <SearchBar
              history={props.history}
              />
          </div>
          
    </div>
  )
}

export default Nav
