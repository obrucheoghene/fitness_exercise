const BASE_URL = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';


export const options = {
  method: 'GET',
  url: BASE_URL,
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}