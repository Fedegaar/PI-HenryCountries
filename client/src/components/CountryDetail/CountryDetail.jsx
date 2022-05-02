import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCountryDetail } from '../../redux/actions'
import s from './CountryDetail.module.css'

function CountryDetail(props) {
    let url = props.match.params.id;
    let detail = useSelector(state => state.countryDetail)
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountryDetail(url))
    },[dispatch, url])
    

    if (!detail.id){
        return (
            <div>Loading</div>
        )
    }

    return (
        <div className={s.Background}>
            <div className={s.Cardback}>

            
                <div className={s.Name}>
                    <span>{detail.name}</span>
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


                <div className={s.Activities}>
                    <span>Turist Activities: {detail.activities_turist}</span>   
                </div>

            </div>

        </div>
    )
}

export default CountryDetail
