const API_BASE_URL = 'https://exercisedb.p.rapidapi.com';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const fetchData = async(url) => {
    const response = await fetch(`${API_BASE_URL}/${url}`, options);
    const data = await response.json();
    return data;
}