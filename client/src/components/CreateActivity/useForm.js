import { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createActivity, getActivities } from '../../redux/actions';
import { useHistory } from 'react-router-dom';


export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm? initialForm : "");
    const [errors, setErrors] = useState({});
    
    const dispatch = useDispatch()
    const history = useHistory()

    const handleChange = (e) => {
        const {name , value} = e.target        
        setForm({
            ...form,
            [name] : value
        })
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form))
    };

    const handleSelect = (e) => {
        let newArray = form.countries
        if(!form.countries.includes(e.target.value)){
            newArray.push(e.target.value)
            setForm({
                ...form,
                countries: newArray
            })
        }
        console.log("SOY FORM.COUNTRIES", form.countries)
    }
    
     const handleDelete = (e) => {
        console.log("SOY E PAPA", e )
        if(form.countries.includes(e)){
            let newArray = form.countries
            newArray = newArray.filter(c => c !== e)
            console.log("NEWARRAY", newArray)
            setForm({
                ...form,
                countries: newArray
            })
        }
        console.log("LUEGO DEL DELETE", form.countries)
    }


    const handleSubmit = (e) => {
        if(!form.name){
            e.preventDefault();
            return alert('Name is required!')
        }
        setErrors(validateForm(form));
        if (Object.keys(errors).length===0){
            dispatch(createActivity(form))
            alert("Sending info. Returning to home.")
            dispatch(getActivities())        
        setForm({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: [] 
        })
        history.push('/home')
        } else {
            e.preventDefault();
            alert ("Errors found on form, please check")
        }
    };

    return {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        handleSelect,
        handleDelete
    };
};