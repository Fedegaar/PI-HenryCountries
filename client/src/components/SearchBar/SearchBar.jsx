import React, { useState } from 'react';
import s from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
import { searchByName } from '../../redux/actions';


function SearchBar() {
  // const countries = useSelector(s => s.sortCountries)
  const [search, setSearch] = useState("")
  const dispatch = useDispatch()
  
  function onInputChange(e){
      e.preventDefault()      
      setSearch(e.target.value)
    }  
  

  function onSubmit(e){
    e.preventDefault();
    dispatch(searchByName(search))
  }  

  return (    
    <form onSubmit={onSubmit} > 
            <input className={s.SearchInput}  type="search" placeholder='Search a country' onChange={(e) => onInputChange(e)} value={search} />
    </form >
  )
}

export default SearchBar
