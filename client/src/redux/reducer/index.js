import { GET_COUNTRIES, GET_COUNTRY_DETAIL, CREATE_ACTIVITY, ORDERED_COUNTRIES, FILTER_CONTINENTS, SEARCH_BY_NAME, GET_ACTIVITIES } from "../actions"


const initialState = {
    countries : [],
    activities : [],
    countryDetail: {},
    sortCountries: [],
    continents: [],
    filterContinents: []
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
            }

        case SEARCH_BY_NAME:
            return {
                ...state,
                sortCountries: payload
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
            let matchContinent = [];
            if (payload !== "ALL"){                
                for (let i=0 ; i < continentsfilter?.length; i++){                    
                    if(continentsfilter[i].continent === payload){                        
                        matchContinent.push(continentsfilter[i])                        
                    }
                }
                return {
                    ...state,
                    sortCountries:matchContinent
                }
            } else {

                return {
                    ...state,
                    sortCountries : state.countries
                }}
                
        case GET_ACTIVITIES:
            let countriByAct = [...state.countries]            
            let matchCountry = [];
            console.log(countriByAct)
            if (payload !== "ACTIVITIES"){                
                for (let i=0 ; i < countriByAct?.length; i++){                    
                    if(countriByAct[i].activity === payload){                        
                        matchCountry.push(countriByAct[i])                        
                    }
                }
                return {
                    ...state,
                    sortCountries:matchCountry
                }
            } else {

                return {
                    ...state,
                    sortCountries : state.countries
                }}
                   


        default : return state
    }
}