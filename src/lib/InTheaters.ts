import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing',
    params: { language: 'en-US', page: '1' },
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_TMDB_API_KEY
    }
};

export default async function getInTheaters (){
    const response = await axios(options);
    return response.data.results;
}