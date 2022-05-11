import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getActivities } from '../../redux/actions'
import s from './ActivityDetail.module.css'

function ActivityDetail({name, id, difficulty, duration, season}) {

    let act = useSelector(state => state.activities);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActivities())
        console.log(act)
    },[dispatch])


  return (
            <div className={s.Activities}>
                <p>Activity's name: {name}</p>                                    
                <p>Difficulty: {difficulty}</p>
                <p>Duration: {duration}</p>
                <p>Season: {season}</p>
            </div>
)
}

export default ActivityDetail
