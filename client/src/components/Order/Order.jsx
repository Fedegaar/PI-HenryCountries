import React from 'react'
import { useDispatch } from 'react-redux'
import { orderedCountries } from '../../redux/actions'

function Order() {
    const dispatch = useDispatch()

    function onSelectChange(e){
        dispatch(orderedCountries(e.target.value))
        console.log(e)
    }

    return (
        <div>


            <select name="select" onChange={e => onSelectChange(e)}>
                <option value="Order">Order</option>
                <option value="ASCENDENT">Ascendent</option>
                <option value="DESCENDENT">Descendent</option>
                <option value="HIGHPOBLATION">High Poblation</option>
                <option value="LOWPOBLATION">Low Poblation</option>
            </select>


            <select>
                <option value="FILTER">Filter</option>
                <option value="CONTINENT">Continent</option>
                <option value="TYPEOFACTIVITY">Type of activity</option>
            </select>



        </div>
    )
}

export default Order
