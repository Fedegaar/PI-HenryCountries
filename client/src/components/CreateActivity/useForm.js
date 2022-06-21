import { useState} from 'react'
import { useDispatch } from 'react-redux';
import { createActivity, getActivities } from '../../redux/actions';
import { useHistory } from 'react-router-dom';


export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
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
        if (!form.countries.includes(e.target.value)){
        setForm({
            ...form,
            countries: [...form.countries, e.target.value]
        })
        }
    }
    const handleClose = (c) => {
        setForm({
            ...form,
            countries: form.countries.filter(c => c !== c.name)
        });
      }


    const handleSubmit = (e) => {
        if(!form.name){
            e.preventDefault();
            return alert('Name is required!')
        }
        setErrors(validateForm(form));
        if (Object.keys(errors).length===0){
            alert("Sending info. Returining to home.")
            dispatch(createActivity(form))
            
        
        setForm({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: [] 
        })
        history.push('/home')
        dispatch(getActivities())
        } else {
            e.preventDefault();
            alert ("Errors found on form, please check")
        }
    };

    return {
        form,
        errors,
        // loading,
        // response,
        handleChange,
        handleBlur,
        handleSubmit,
        handleSelect,
        handleClose
    };
};