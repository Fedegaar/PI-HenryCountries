import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES"
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL"
export const CREATE_ACTIVITY = "CREATE_ACTIVITY"
export const ORDERED_COUNTRIES = "ORDERED_COUNTRIES"
export const FILTER_CONTINENTS = "FILTER_CONTINENTS"


export const getCountries = () => {
    return async function (dispatch) {
        await axios.get('http://localhost:3001/countries')
        .then((countries) => {
            dispatch ({
                type: GET_COUNTRIES,
                payload: countries.data
            })
        })
        .catch((err) => {
            console.log(err)
        });
    };
  };

export const getCountryDetail = (id) => {
    return async function (dispatch) {
        await axios.get('http://localhost:3001/countries/' + id)
        .then((detail) => {
            dispatch ({
                type: GET_COUNTRY_DETAIL,
                payload: detail.data
            })
        })
    }
}

export const orderedCountries = (order) => {
    return {
        type: ORDERED_COUNTRIES,
        payload:order
    }
}

export const filterContinents = (filter) => {
    return {
        type: FILTER_CONTINENTS,
        payload:filter
    }
}

export const createActivity = (body) => {
    return async function (dispatch) {
        let result = await axios.post('http://localhost:3001/activity', body)        
            dispatch ({
                type: CREATE_ACTIVITY,
                payload: result.data
            })        
            .catch((err) => {
            console.log(err)
             });
    };
};

