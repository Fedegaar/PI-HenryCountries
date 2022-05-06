import React from 'react'
import { useDispatch } from 'react-redux'
import { orderedCountries } from '../../redux/actions'
import s from './Order.module.css'

function Order() {
    const dispatch = useDispatch()

    function onSelectChange(e){
        dispatch(orderedCountries(e.target.value))
    }

    return (
        <div className={s.Order}>


            <select onChange={e => onSelectChange(e)} className={s.Order}>
                <option value="Order">Order A-Z</option>
                <option value="ASCENDENT">Ascendent</option>
                <option value="DESCENDENT">Descendent</option>
            </select>


            <select onChange={e => onSelectChange(e)} className={s.Order}>
                <option value="Order">Order by poblation</option>
                <option value="HIGHPOBLATION">High Poblation</option>
                <option value="LOWPOBLATION">Low Poblation</option>
            </select>



        </div>
    )
}

export default Order
