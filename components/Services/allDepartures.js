const axios = require('axios').default;
let getAllDepartures=null;


export default getAllDepartures = async ()=>{
  try {
    const response = await axios.get('https://6315ae3e5b85ba9b11e4cb85.mockapi.io/departures/Flightdata')
    return response
  } catch (data) {
    return data;
  }
}



