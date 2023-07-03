import axios from 'axios';
const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/multi',
    params: { query: 'fast', include_adult: 'false', language: 'en-US', page: '1' },
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_TMDB_API_KEY
    }
};

export default async function searchMovies(query: string) {
    options.params.query = query;
    const response = await axios.request(options);
    return response.data;
}
