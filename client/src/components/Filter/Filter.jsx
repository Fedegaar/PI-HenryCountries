// import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterContinents } from '../../redux/actions'
import s from '../Order/Order.module.css'


function Filter() {
    const continents = useSelector((state) => state.continents)

    const dispatch = useDispatch()

    function onSelectChange(e){            
            dispatch(filterContinents(e.target.value))                
    }

    return (    
    <select onChange={(e) => onSelectChange(e)} className={s.Filters}>
        <option value="ALL">ALL</option>        
        {continents?.map((c) => {
            return(
                <option key={c} name ="filter"  value={c}>{c}</option>
            )
            })}      
    </select>    
    )
}

export default Filter