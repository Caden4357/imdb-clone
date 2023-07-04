import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/top_rated',
    params: { language: 'en-US', page: '1' },
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_TMDB_API_KEY
    }
};

export default async function getTop100AllTime (){
    const response = await axios(options);
    return response.data.results;
}