import axios from "axios";

const url ='https://covid19.mathdro.id/api'

export const Fetchdata = async (country)=>{
    let changeable = url;
    if(country){
        changeable = `${url}/countries/${country}`;
    }
    try {
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeable);
        // const modifieddata={confirmed,recovered ,deaths ,lastUpdate }
        return {confirmed,recovered ,deaths ,lastUpdate };

    } catch (error) {
        console.error(error);
    }
}


export const FetchDailydata = async ()=>{
    try {
        const {data} = await axios.get(`${url}/daily`);
        const modifieddailydata = data.map((dailydata)=>({
            confirmed : dailydata.confirmed.total,
            deaths : dailydata.deaths.total,
            date : dailydata.reportDate,
        }))

        return modifieddailydata;
    } catch (error) {
        
    }
}


export const fetchCountries = async()=>{
    try {
        const {data : {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);

    } catch (error) {
        console.error(error);
    }
}

const baseUrl = "https://corona.lmao.ninja/v2/countries";

export const fetchLocation = async () => {
  try {
    const { data = [] } = await axios.get(`${baseUrl}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};