import React, { useState } from 'react'
import s from './SearchBar.module.css'
import axios from 'axios'

function SearchBar(props) {
 
  const [search, setSearch] = useState("")

  
  async function onSubmit(e){
    e.preventDefault();
    if (search.length){
      let response = await getCountryId()
      console.log(response)
      
      if(response.id){
        props.history.push('/countries/detail/' +response.id)
        console.log("Entre Al IF")
      } else {
          
          console.log("Entre Al else")
          alert (response.message)
      }
    }
  }

  function onInputChange(e){
      e.preventDefault()
      setSearch(e.target.value)
  }
  
  async function getCountryId(){
    let country = await axios.get ('http://localhost:3001/countries?name=' + search)
    return country.data
  }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder='Enter a country' onChange={onInputChange} value={search} />
            <input type="submit" value="Search" className={s.btn}/>
        </form>
    </div>
  )
}

export default SearchBar
