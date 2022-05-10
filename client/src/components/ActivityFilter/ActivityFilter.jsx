import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActivities } from '../../redux/actions'

import s from './ActivityFilter.module.css'

function ActivityFilter() {  
    
    const activities = useSelector((state) => state.activities)

    const dispatch = useDispatch()

    function onSelectChange(e){            
            dispatch(getActivities(e.target.value))                
    }

    return (    
    <select onChange={(e) => onSelectChange(e)} className={s.SelecActi}>
        <option value="ACTIVITIES">ACTIVITIES</option>        
        {activities?.map((c) => {
            return(
                <option key={c} name ="filter"  value={c}>{c}</option>
            )
            })}      
    </select>    
    )

  
}

export default ActivityFilter
