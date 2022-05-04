import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCountries } from '../../redux/actions';
import s from'./CreateActivity.module.css'

function CreateActivity() {

    const dispatch = useDispatch();

    const countries = useSelector((state) => state.countries)


    useEffect(() => {
        if(!countries.length){
            dispatch(getCountries())
        }
    },[dispatch,countries.length])

    const [input, setInput] = useState({
        name : "",
        difficulty : "",
        duration : "",
        season : "",        
    })

    const [errors, setErrors] = useState({});

    function validate(input){
        let errors = {};
        if (!input.name){
            errors.name = 'Activity name is required';
        } 
        if (!input.duration){
            errors.duration = 'Duration is required';
        }
        if (!input.season){
            errors.season = 'Season is required';
        } 
        return errors
    };

    const handleInputChange = function (e) {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }


    const handleInputSubmit = function(e){
        e.preventDefault()
        if(Object.keys(errors).length === 0){
            let body = {
                ...input
            }
            dispatchEvent(CreateActivity(body))
            setInput({
                name: "",
                difficulty: 1,
                duration: "",
                season: "",

            })
        }
    }


  return (
    <div className={s.DivMay}>
        
        <div className={s.Box}>
        
            <form onSubmit={handleInputSubmit} className={s.Form}>
                    <div>
                        <label>Name's activity: </label>
                        <input type="text" name="name" onChange={handleInputChange} value={input.name}></input>
                    </div>

                    <div>
                        <label>Difficulty: </label>
                        <input type="range" name="difrange" min="1" max="5" onChange={handleInputChange} value={input.difficulty}></input>
                    </div>

                    <div>
                        <label>Duration: </label>
                        <input type="text" onChange={handleInputChange} value={input.duration}></input>
                    </div>

                    <div>
                        <label>Season: </label>
                        <input type="text" onChange={handleInputChange} value={input.season}></input>
                    </div>

                    <div>
                        <label>Country: </label>              
                                <select >
                                    <option>Countries</option>
                                    {countries?.map((c) => {
                                    return(
                                        <option key={c.id} name ={c.name} onChange={handleInputChange} value={input.difficulty}>{c.name}</option>
                                    )
                                    })}                     
                                </select>
                    </div>

                    <div>              
                        <input type="submit"></input>
                    </div>

                    <div>              
                        <input type="reset"></input>
                    </div>
            </form>
        </div>
    </div>
  )
}

export default CreateActivity