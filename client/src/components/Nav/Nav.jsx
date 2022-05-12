import React from 'react'
import { Link } from 'react-router-dom'
import s from './Nav.module.css'
import IMG from '../../img/image (1).png'

function Nav(props) {
  return (
    <div className={s.DivMayor}>
          
          
          <div className={s.DivImg}>
              <Link to ='/home'>
                  <img src={IMG} width={50} alt= "HOME"/>              
              </Link>
          </div>
          <div>
            <h1 className={s.Title}>THE COUNTRY WEB APP</h1>
          </div>

          <div className={s.DivAct}>
              <Link to='/countries/create'>
                  <h3 className={s.newAct}>NEW ACTIVITY</h3> 
              </Link>
          </div>

          
    </div>
  )
}

export default Nav
