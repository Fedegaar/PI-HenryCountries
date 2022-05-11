import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getActivities, getCountries} from '../../redux/actions'
import CountryCard from '../CountryCard/CountryCard';
import Paginado from '../Paginado/Paginado';
import Order from '../Order/Order';
import Loader from '../Loader/Loader'
import Filter from '../Filter/Filter'
import SearchBar from '../SearchBar/SearchBar';
import s from './Home.module.css'
import ActivityFilter from '../ActivityFilter/ActivityFilter';



function Home(props) {
  let countries = useSelector(state => state.sortCountries);
  const dispatch = useDispatch();

  // const allCountries = useSelector((s) => s.countries);
  const [currentPage, setcurrentPage] = useState(1);
  const [countriesPP, setcountriesPP] = useState(9);
  const indxLastCountry = currentPage * countriesPP;
  const indxFirstCountry = indxLastCountry - countriesPP;
  const currentCountries = countries.slice(indxFirstCountry, indxLastCountry)

  const paginado = (pageNum) => {
      setcurrentPage(pageNum)      
      if(pageNum === 1){
        setcountriesPP(9)
      } else {
        setcountriesPP(10)
      }
  }
  
  function onClick(e){
    e.preventDefault()
    dispatch(getCountries())
  }

  useEffect(() => {
    if(!countries.length) {
    dispatch(getCountries())
    dispatch(getActivities())
    }
  },[dispatch, countries.length])

  return (

    <div className={s.Background}>

        <div className={s.Inputs}>
            <Order/>
            <Filter/>
            <ActivityFilter/>
        </div>

        <div>
          
        </div>


        <div className={s.DivSearch}>
              
              <SearchBar
              history={props.history}
              />
              
          </div>


          <div>              
                <button className={s.Btn}  onClick={onClick}> RESET COUNTRIES </button>            
          </div>
          

        <Paginado
              countriesPP={countriesPP}
              countries={countries.length}
              paginado={paginado}/>

        

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
              <div className={s.Loader}>
                <Loader/>
              </div>
            )}
          </div>


    </div>
  )
}
export default Home
