import { GET_COUNTRIES, GET_COUNTRY_DETAIL, CREATE_ACTIVITY, ORDERED_COUNTRIES, FILTER_CONTINENTS } from "../actions"


const initialState = {
    countries : [],
    activities : [],
    countryDetail: {},
    sortCountries: [],
    continents: []
}

export default function reducer (state = initialState, {type, payload}){
    switch (type){
        case GET_COUNTRIES:            
            let conti = []                                            
            payload.forEach ((c) => {                
                if (!conti.includes(c.continent)){
                    conti.push(c.continent) 
                }
            })                         
            return{
                ...state,
                countries:payload,
                sortCountries:payload,
                continents:conti
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
            let orderedCountries = [...state.sortCountries]            
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
                
        case FILTER_CONTINENTS:
            let continentsfilter = [...state.countries]
            if (payload !== "CONTINENT"){
                let result = continentsfilter.filter(e => e.continent === payload)
   
                console.log(result)
                return result
            }



        default : return state
    }
}