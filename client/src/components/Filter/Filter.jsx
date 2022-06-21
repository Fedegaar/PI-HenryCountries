// import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterContinents } from '../../redux/actions'
import s from './Filter.module.css'


function Filter({setcurrentPage}) {
    const continents = useSelector((state) => state.continents)

    const dispatch = useDispatch()

    function onSelectChange(e){            
            dispatch(filterContinents(e.target.value))
            setcurrentPage(1)               
    }

    return (    
    <select onChange={(e) => onSelectChange(e)} className={s.SelecConti}>
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