import axios from "axios";


export const CountryAllList = async () =>{
    
}

export const CountryDetails = async (name:string) =>{
    const url:string = "https://restcountries.com/v3.1/name/"+name;
    return await axios.get(url);
}