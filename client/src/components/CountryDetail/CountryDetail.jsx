import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  deleteActivity, getCountryDetail } from '../../redux/actions'
import ActivityDetail from '../ActivityDetail/ActivityDetail';
import Loader from '../Loader/Loader';
import s from './CountryDetail.module.css'

function CountryDetail(props) {
    let url = props.match.params.id;
    let detail = useSelector(state => state.countryDetail)
    let dispatch = useDispatch();
   

    useEffect(() => {
        dispatch(getCountryDetail(url))        
    },[dispatch, url])

    function onClose(){
        dispatch(deleteActivity)
    }
    

    if (!detail.id){
        return (
            <div><Loader/></div>
        )
    }


    return (
        <div className={s.Background}>
            
            <div className={s.asd}>
            
                <div className={s.Cardback}>

                
                    <div className={s.Name}>
                        <h4>{detail.name}</h4>
                    </div>

                
                    <div className={s.Img}>
                        <img src={detail.img} alt="IMG NOT FOUND"/>
                    </div>


                    <div className={s.ID}>
                        <span>{detail.id}</span>
                    </div>


                    <div className={s.Capital}>
                        <span>Capital: {detail.capital}</span>
                    </div>


                    <div className={s.Continent}>
                        <span>Continent: {detail.continent}</span>
                    </div>


                    <div className={s.Subregion}>
                        <span>Subregion: {detail.subregion}</span>
                    </div>


                    <div className={s.Area}>
                        <span>Area: {detail.area}</span>
                    </div>


                    <div className={s.Population}>
                        <span>Population: {detail.population}</span>
                    </div>

                    </div>
                        
                        
                    <div>
                                <h1 className={s.Title}>TOURIST ACTIVITIES:</h1> {detail.activities?.map((act)=> {
                                                            return <ActivityDetail
                                                            key = {act.id}
                                                            name = {act.name}              
                                                            id = {act.id}              
                                                            difficulty = {act.difficulty}
                                                            duration = {act.duration}
                                                            season = {act.season}                                                                                           
                                                            />
                                                        })}                                                        
                            
                    </div>    
                
            </div>

        </div>
    )
}

export default CountryDetail
