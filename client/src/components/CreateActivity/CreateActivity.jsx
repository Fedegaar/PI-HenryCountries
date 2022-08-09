import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../../redux/actions';
import s from'./CreateActivity.module.css'
import { useForm } from './useForm';
    
    const initialForm = {
        name: "",
        difficulty: "",
        duration: "",
        season: "", 
        countries: []  
    }
    
    const validationsForm = (form) => {
        let errors = {};
        let regexName =/^[a-zA-Z].*[\s.]*$/g;
        if (!form.name.trim()){
            errors.name = "Activity's name is required"
        } else if (!regexName.test(form.name)){
            errors.name = "Activity's name is incorrect"
        } else if (form.name.trim().length>30){
            errors.name = "Activity's name is too long" 
        } else if (!form.difficulty){
            errors.difficulty = "Difficulty's duration is required"
        } else if (!form.duration){
            errors.duration = "Activity's duration is required"
        } else if (form.season === "Select"){
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
        handleChange,
        handleBlur,
        handleSubmit,
        handleSelect,
        handleDelete
    } = useForm(initialForm, validationsForm)


    useEffect(() => {
        if(!countries.length){
            dispatch(getCountries())
        }
    },[dispatch,countries.length])

  return (
    <div className={s.DivMay}>
        
        
        <div className={s.Box}>
            <h3 className={s.tit}>CREATE NEW ACTIVITY</h3>
        
            <form onSubmit={handleSubmit} className={s.Form}>
                                       
                    
                    
                    <div className={s.Inputs}>
                        <label>Activity's name:  </label>
                        <input  type="text" size="20" name="name" onChange={handleChange} value={form.name} onBlur={handleBlur} className={s.IInputs}></input>
                    </div>
                    {errors.name && <p className={s.Errors}>⛔ {errors.name}</p> }

                    
                    
                    
                    <div>
                        <label>Difficulty: </label>
                        <select className={s.IInputs} name="difficulty" onChange={handleChange} onBlur={handleBlur}>
                                    <option value ="Select a difficulty">Select a difficulty</option>
                                    <option value ="1">1-(Very Easy)</option>
                                    <option value="2">2-(Easy)</option>
                                    <option value="3">3-(Medium)</option>
                                    <option value="4">4-(Hard)</option>
                                    <option value="5">5-(Very Hard)</option>
                                </select>
                    </div>
                    {errors.difficulty && <p className={s.Errors}>⛔ {errors.difficulty}</p> }
                    
                    
                    
                    
                    <div className={s.Inputs}>
                        <label>Duration: </label>
                        <select className={s.IInputs} name="duration" onChange={handleChange} onBlur={handleBlur}>
                                    <option value ="Select a duration">Select a duration</option>
                                    <option value ="1 hr">1 hr</option>
                                    <option value ="1:30 hr">1:30 hr</option>
                                    <option value="2 hr">2 hr</option>
                                    <option value="2:30 hr">2:30 hr</option>
                                    <option value="3 hr">3 hr</option>
                                    <option value="3:30 hr">3:30 hr</option>
                                </select>
                    </div>
                    {errors.duration && <p className={s.Errors}>⛔ {errors.duration}</p>}

                    
                    
                    
                    <div className={s.Inputs}>
                        <label>Season: </label>
                                <select className={s.IInputs} name="season" onChange={handleChange} onBlur={handleBlur}>
                                    <option value ="Select a season">Select a season</option>
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
                                <select className={s.IInputs} onChange={(e) => handleSelect(e)}>
                                    <option>Countries</option>
                                    {countries?.map((c) => {
                                    return(
                                        <option size="20" key={c.id} name ={c.name}  onBlur={handleBlur} >{c.name}</option>
                                    )
                                    })}                     
                                </select>
                    </div>
                    
                    
                    
                    
                    <div >              
                        <input disabled={errors & errors} className={s.Btn} value='Create' type="submit" onSubmit={handleSubmit}></input>             
                    </div>

            </form>


            <div className={s.CountrySelectContain} >
                    
                        
                            {form.countries.map((e) => <ol key={e} className={s.ContList}><li><button className={s.CBut} onClick={()=>handleDelete(e)}>X</button>{e}</li></ol>)}
                        
                    
            </div>


        </div>
    </div>
  )
}

export default CreateActivity