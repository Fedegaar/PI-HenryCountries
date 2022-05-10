import { useState} from 'react'
import { useDispatch } from 'react-redux';
import { createActivity } from '../../redux/actions';


export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    // const [loading, setLoading] = useState(false);
    // const [response, setResponse] = useState(null);

    const dispatch = useDispatch()

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));
        if (Object.keys(errors).length===0){
            alert("Sending info")
            dispatch(createActivity(form))
        }
        setForm({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: [] 
        })
    };

    return {
        form,
        errors,
        // loading,
        // response,
        handleChange,
        handleBlur,
        handleSubmit,
        handleSelect
    };
};