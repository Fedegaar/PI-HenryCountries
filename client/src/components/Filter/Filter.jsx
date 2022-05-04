// import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterContinents } from '../../redux/actions'


function Filter() {
    const continents = useSelector((state) => state.continents)

    const dispatch = useDispatch()



    function onSelectChange(e){
           dispatch(filterContinents())    
    }

    return (    
    <select onChange={(e) => onSelectChange(e)}>
        <option value="CONTINENT">Continent</option>        
        {continents?.map((c) => {
            return(
                <option key={c} name ={c}  value={c}>{c}</option>
            )
            })}      
    </select>
    
    )
}

export default Filter