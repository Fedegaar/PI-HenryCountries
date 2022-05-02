import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getCountries} from '../../redux/actions'
import CountryCard from '../CountryCard/CountryCard';
import Paginado from '../Paginado/Paginado';
import Order from '../Order/Order';
import s from './Home.module.css'


function Home() {
  let countries = useSelector(state => state.countries);
  const dispatch = useDispatch();

  // const allCountries = useSelector((s) => s.countries);
  const [currentPage, setcurrentPage] = useState(1);
  const [countriesPP, setcountriesPP] = useState(10);
  const indxLastCountry = currentPage * countriesPP;
  const indxFirstCountry = indxLastCountry - countriesPP;
  const currentCountries = countries.slice(indxFirstCountry, indxLastCountry)

  const paginado = (pageNum) => {
    if(currentPage!==0){
      setcountriesPP(9)
    }
    setcurrentPage(pageNum)
  }
  

  useEffect(() => {
    if(!countries.length) {
    dispatch(getCountries())
    }
  },[dispatch, countries.length])

  return (

    <div className={s.Background}>
        <Order/>
        <Paginado
              countriesPP={countriesPP}
              countries={countries.length}
              paginado={paginado}              />
        

          <div className={s.Cards}>
            {currentCountries.length ? (
              currentCountries?.map((c) => {
                return <CountryCard
                key = {c.id}
                id = {c.id}              
                name = {c.name}              
                continent = {c.continent}
                img = {c.img}          
                />
              })
          
            ) : (
                  <span className={s.Load}>Loading...</span>
            )}
          </div>
    </div>
  )
}
export default Home
