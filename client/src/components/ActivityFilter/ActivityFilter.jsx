import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterActivities } from '../../redux/actions'

import s from './ActivityFilter.module.css'

function ActivityFilter() {  
    
    const activities = useSelector((state) => state.activities)
    
    const dispatch = useDispatch()
    
    function onSelectChange(e){            
        dispatch(filterActivities(e.target.value))
    }
    console.log("SOY EL CONSOLELOG", activities)
    return (    
    <select onChange={(e) => onSelectChange(e)} className={s.SelecActi}>
        <option value="ACTIVITIES">ACTIVITIES</option>        
        {activities && activities.map((act) => {            
            return(
                <option key={act.id} name ="filter"  value={act.name}>{act.name}</option>
            )
            })}      
    </select>    
    )

  
}

export default ActivityFilter
