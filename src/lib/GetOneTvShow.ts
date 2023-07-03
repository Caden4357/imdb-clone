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

export default async function getOneTvShow(id: string) {
    // * Get the show details
    options.url = `https://api.themoviedb.org/3/tv/${id}`;
    const response = await axios.request(options);

    // * Get the show trailer
    options.url = `https://api.themoviedb.org/3/tv/${id}/videos`;
    const trailer = await axios.request(options);
    const officialTrailer = trailer.data.results.filter((trailer: any) => trailer.type === 'Trailer');
    officialTrailer.length > 0 ? response.data.trailerId = officialTrailer[0].key : response.data.trailerId = null;

    // * Get the show cast
    options.url = `https://api.themoviedb.org/3/tv/${id}/credits`
    const cast = await axios.request(options);
    response.data.cast = cast.data.cast;

    // * Get the show streaming info
    options.url = `https://api.themoviedb.org/3/tv/${id}/watch/providers`
    const streamingInfo = await axios.request(options);
    response.data.streamingInfo = streamingInfo.data.results.US;
    console.log(streamingInfo.data.results.US);


    return response.data;
}