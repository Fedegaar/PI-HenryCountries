import React from 'react'
import { Link } from 'react-router-dom'
import s from './Nav.module.css'
import IMG from '../../img/image (1).png'

function Nav(props) {
  return (
    <div className={s.DivMayor}>
          
          
          <div className={s.DivImg}>
              <Link to ='/home'><img src={IMG} width={50} alt= "HOME"/>              
              </Link>
          </div>



          <div className={s.DivAct}>
              <Link to='/countries/create'><span className={s.DivAct}>NEW ACTIVITY</span></Link>
          </div>

          
    </div>
  )
}

export default Nav
