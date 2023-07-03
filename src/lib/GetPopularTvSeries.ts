import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/tv/popular',
    params: { language: 'en-US', page: '1' },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWNjYTJmOGViZjI4ZGFmZWFmNGI4NzhjYjlkZDUzZCIsInN1YiI6IjY0ODI1NjgzYmYzMWYyNTA1NzA1MTE2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R5DcsDYY4ZRWQysStaJQEbEWaDKYLDRJ20gl-8p5ERE'
    }
};

export default async function getPopularTvSeries() {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
}
