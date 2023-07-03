import axios from 'axios';
const options = {
    method: 'GET',
    url: ``,
    params: { language: 'en-US' },
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_TMDB_API_KEY
    }
};

export default async function getOneMovie(id: string) {
    // * Get the movie details
    options.url = `https://api.themoviedb.org/3/movie/${id}`;
    const response = await axios.request(options);

    // * Get the movie trailer
    options.url = `https://api.themoviedb.org/3/movie/${id}/videos`;
    const trailer = await axios.request(options);
    const officialTrailer = trailer.data.results.filter((trailer:any) => trailer.type === 'Trailer');
    officialTrailer.length > 0 ? response.data.trailerId = officialTrailer[0].key : response.data.trailerId = null;

    // * Get the movie cast
    options.url = `https://api.themoviedb.org/3/movie/${id}/credits`
    const cast = await axios.request(options);
    response.data.cast = cast.data.cast;

    // * Get the movie streaming info
    options.url = `https://api.themoviedb.org/3/movie/${id}/watch/providers`
    const streamingInfo = await axios.request(options);
    response.data.streamingInfo = streamingInfo.data.results.US;
    console.log(streamingInfo.data.results.US);

    
    return response.data;
}