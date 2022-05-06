import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCountries } from '../../redux/actions';
import s from'./CreateActivity.module.css'
import { useForm } from './useForm';

    const initialForm = {
        name: "",
        difficulty: "",
        duration: "",
        season: "",   
    }
    
    const validationsForm = (form) => {
        let errors = {};
        if (!form.name.trim()){
            errors.name = "Activity's name is required"
        } else if (!form.difficulty){
            errors.difficulty = "Difficulty's duration is required"
        } else if (!form.duration){
            errors.duration = "Activity's duration is required"
        } else if (form.season === "Select"){
            console.log(form.season)
            errors.season = "Activity's season is required"
        }
        return errors;
    }

function CreateActivity() {    
    

    const dispatch = useDispatch();

    const countries = useSelector((state) => state.countries)

    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(initialForm, validationsForm)


    useEffect(() => {
        if(!countries.length){
            dispatch(getCountries())
        }
    },[dispatch,countries.length])

    // const [input, setInput] = useState({
    //     name: "",
    //     difficulty: "",
    //     duration: "",
    //     season: "",        
    // })

    // const [errors, setErrors] = useState({});

    // function validate(input){
    //     let errors = {};
    //     if (!input.name){
    //         errors.name = 'Activity name is required';
    //     } 
    //     if (!input.duration){
    //         errors.duration = 'Duration is required';
    //     }
    //     if (!input.season){
    //         errors.season = 'Season is required';
    //     } 
    //     return errors
    // };

    // const handleInputChange = function (e) {
    //     e.preventDefault()
    //     const { name, value } = e.target
    //     setInput({
    //         ...input,
    //         name : value
    //     });
    //     setErrors(validate({
    //         ...input,
    //         name: value
    //     }))
    // }


    // const handleInputSubmit = function(e){
    //     e.preventDefault()
    //     if(Object.keys(errors).length === 0){
    //         let body = {
    //             ...input
    //         }
    //         dispatchEvent(CreateActivity(body))
    //         setInput({
    //             name: "",
    //             difficulty: 1,
    //             duration: "",
    //             season: "",

    //         })
    //     }
    // }


  return (
    <div className={s.DivMay}>
        
        <div className={s.Box}>
        
            <form onSubmit={handleSubmit} className={s.Form}>
                    
                    
                    
                    <div className={s.Inputs}>
                        <label>Activity's name:  </label>
                        <input type="text" size="20" name="name" onChange={handleChange} value={form.name} onBlur={handleBlur} className={errors.name && s.IDanger}></input>
                    </div>
                    {errors.name && <p className={s.Errors}>⛔ {errors.name}</p> }

                    
                    
                    
                    <div>
                        <label>Difficulty: </label>
                        <input type="number" size="20" name="difficulty"  onChange={handleChange} value={form.difficulty} onBlur={handleBlur}></input>
                    </div>
                    {errors.difficulty && <p className={s.Errors}>⛔ {errors.difficulty}</p> }
                    
                    
                    
                    
                    <div className={s.Inputs}>
                        <label>Duration: </label>
                        <input type="text" size="20" name="duration" onChange={handleChange} value={form.duration} onBlur={handleBlur}></input>
                    </div>
                    {errors.duration && <p className={s.Errors}>⛔ {errors.duration}</p>}

                    
                    
                    
                    <div className={s.Inputs}>
                        <label>Season: </label>
                                <select name="season" onChange={handleChange} onBlur={handleBlur}>
                                    <option value ="Select">Select</option>
                                    <option value ="Summer">Summer</option>
                                    <option value="Autumn">Autumn</option>
                                    <option value="Winter">Winter</option>
                                    <option value="Spring">Spring</option>
                                </select>
                        {/* <input type="text" size="20" name="season" onChange={handleChange} value={form.season} onBlur={handleBlur}></input> */}
                    </div>
                    {errors.season && <p>⛔ {errors.season}</p>}

                    
                    
                    
                    <div className={s.Inputs}>
                        <label>Country: </label>              
                                <select >
                                    <option>Countries</option>
                                    {countries?.map((c) => {
                                    return(
                                        <option size="20" key={c.id} name ={c.name} onChange={handleChange} onBlur={handleBlur} >{c.name}</option>
                                    )
                                    })}                     
                                </select>
                    </div>

                    
                    
                    
                    <div className={s.btn}>              
                        <input value='Create' type="submit"></input>             
                        <input value='Reset' type="reset"></input>
                    </div>



            </form>
        </div>
    </div>
  )
}

export default CreateActivity