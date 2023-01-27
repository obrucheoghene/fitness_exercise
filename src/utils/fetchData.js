const API_BASE_URL = 'https://zylalabs.com/api/392/exercise+database+api';

const options = {
  method: 'GET',
  headers: {
    'Authorization': process.env.REACT_APP_ZYLA_AUTH_KEY,
  }
};


export const fetchData = async(url) => {
    const response = await fetch(`${API_BASE_URL}/${url}`, options);
    const data = await response.json();
    return data;
}