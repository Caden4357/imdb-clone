import axios from 'axios';
const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/multi',
    params: { query: 'fast', include_adult: 'false', language: 'en-US', page: '1' },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWNjYTJmOGViZjI4ZGFmZWFmNGI4NzhjYjlkZDUzZCIsInN1YiI6IjY0ODI1NjgzYmYzMWYyNTA1NzA1MTE2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R5DcsDYY4ZRWQysStaJQEbEWaDKYLDRJ20gl-8p5ERE'
    }
};

export default async function searchMovies(query: string) {
    options.params.query = query;
    const response = await axios.request(options);
    return response.data;
}
