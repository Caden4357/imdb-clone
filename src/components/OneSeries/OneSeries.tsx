import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TvShowContext } from '../../context/TvShowProvider'
import getOneTvShow from '../../lib/GetOneTvShow'
import OneFilmLayout from '../OneFilm/OneFilmLayout'
import Loading from '../Loading'
import OneFilmHeader from '../OneFilm/OneFilmHeader'
import Poster from '../OneFilm/Poster'
import Trailer from '../OneFilm/Trailer'
import StreamingInfo from '../OneFilm/StreamingInfo'
import Overview from '../OneFilm/Overview'
import Cast from '../OneFilm/Cast'
export default function OneSeries() {
    const { tvShows, setTvShows } = useContext(TvShowContext)
    const { id } = useParams();
    useEffect(() => {
        async function getTvShow() {
            if (id) {
                const response = await getOneTvShow(id)
                setTvShows(response)
            }
        }
        getTvShow()
    }
        , [id])
    if (typeof tvShows === 'object' && !Array.isArray(tvShows) && tvShows !== null) {
        return (
            <OneFilmLayout>
                <OneFilmHeader title={tvShows.name} vote_average={tvShows.vote_average} />

                <div className='flex justify-between mb-10'>
                    <Poster poster_path={tvShows.poster_path} />
                    {
                        tvShows.trailerId && tvShows.trailerId !== null &&
                        <Trailer trailerId={tvShows.trailerId} />
                    }
                </div>
                <h3 className='dark:text-white text-3xl'>Streaming On:</h3>
                <div className='flex'>
                    {
                        tvShows.streamingInfo && tvShows.streamingInfo.flatrate && tvShows.streamingInfo.flatrate.length > 0 ?
                            <StreamingInfo rent={tvShows.streamingInfo.flatrate} buy={tvShows.streamingInfo.buy} link={tvShows.streamingInfo.link} /> :
                            <h3 className='w-1/4 dark:text-white mt-5'>No Streaming Info For This Title</h3>
                    }
                    <Overview overview={tvShows.overview} />

                </div>
                {
                    tvShows.cast && tvShows.cast.length > 0 &&
                    <Cast cast={tvShows.cast} />
                }
            </OneFilmLayout >
        )
    }
    else {
    return (
        <OneFilmLayout>
            <Loading />
        </OneFilmLayout>
    )
}
}
