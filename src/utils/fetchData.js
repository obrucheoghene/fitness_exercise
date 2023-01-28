export const EXERCISE_BASE_URL = 'https://zylalabs.com/api/392/exercise+database+api';
export const YOUTUBE_BASE_URL = 'https://youtube-search-results.p.rapidapi.com/youtube-search';

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'Authorization': process.env.REACT_APP_ZYLA_AUTH_KEY,
  }
};


export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
  }
};

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}