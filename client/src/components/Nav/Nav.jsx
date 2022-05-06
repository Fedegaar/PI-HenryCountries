import React from 'react'
import { Link } from 'react-router-dom'
import s from './Nav.module.css'
import IMG from '../../img/image (1).png'
import IMG2 from '../../img/NEW ACTIVITY.png'

function Nav(props) {
  return (
    <div className={s.DivMayor}>
          
          
          <div className={s.DivImg}>
              <Link to ='/home'>
                  <img src={IMG} width={50} alt= "HOME"/>              
              </Link>
          </div>



          <div className={s.DivAct}>
              <Link to='/countries/create'>
                  <img src={IMG2} width={150} alt= "HOME"/> 
              </Link>
          </div>

          
    </div>
  )
}

export default Nav
