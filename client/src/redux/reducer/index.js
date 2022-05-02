import { GET_COUNTRIES, GET_COUNTRY_DETAIL, CREATE_ACTIVITY, ORDERED_COUNTRIES, FILTERED_COUNTRIES } from "../actions"


const initialState = {
    countries : [],
    activities : [],
    countryDetail: {},
    sortCountries: []
}

export default function reducer (state = initialState, {type, payload}){
    switch (type){
        case GET_COUNTRIES:
            return{
                ...state,
                countries:payload,
                sortCountries:payload
            }
        case GET_COUNTRY_DETAIL:
            return{
                ...state,
                countryDetail:payload
            }
        case CREATE_ACTIVITY:
            return {
                ...state,
                activities: payload
            }
        case ORDERED_COUNTRIES:
            let orderedCountries = [...state.countries]            
                if (payload === "ASCENDENT" || payload === "DESCENDENT") {
                    orderedCountries.sort(function (a, b) {
                    if (a.name < b.name){
                        return payload === "ASCENDENT" ? -1 : 1;
                    }
                    if (a.name > b.name){
                        return payload === "ASCENDENT" ? 1 : -1;
                    }
                    return 0;
                })
                } else if (payload=== "HIGHPOBLATION" || payload === "LOWPOBLATION"){
                    orderedCountries.sort(function (a,b) {
                        console.log(orderedCountries)
                    if (a.population < b.population){
                        return payload === "HIGHPOBLATION" ? 1 : -1;
                    }
                    if (a.population > b.population){
                            return payload === "HIGHPOBLATION" ? -1 : 1;
                    }
                    return 0;
                    })
                }                
                return{
                    ...state,
                    sortCountries: orderedCountries
                }

        default : return state
    }
}