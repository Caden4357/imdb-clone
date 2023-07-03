import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MovieContext } from '../../context/MovieProvider'
import getOneMovie from '../../lib/GetOneMovie'
import Loading from '../Loading'
import Cast from './Cast'
import OneFilmHeader from './OneFilmHeader'
import OneFilmLayout from './OneFilmLayout'
import Overview from './Overview'
import Poster from './Poster'
import StreamingInfo from './StreamingInfo'
import Trailer from './Trailer'

export default function OneFilm() {
    const { movies, setMovies } = useContext(MovieContext)
    const { id } = useParams();

    useEffect(() => {
        async function getMovie() {
            if (id) {
                const response = await getOneMovie(id)
                setMovies(response)
            }
        }
        getMovie()

    }, [id])

    if(typeof movies === 'object' && !Array.isArray(movies) && movies !== null){
        return (
            <OneFilmLayout>
                {
                    <>
                        <OneFilmHeader title={movies.title} runtime={movies.runtime} vote_average={movies.vote_average} />
    
                        <div className='flex justify-between mb-10'>
                            <Poster poster_path={movies.poster_path} />
                            {
                                movies.trailerId && movies.trailerId !== null &&
                                <Trailer trailerId={movies.trailerId} />
                            }
                        </div>
                        <h3 className='dark:text-white text-3xl'>Streaming On:</h3>
                        <div className='flex'>
                            {
                                movies.streamingInfo && movies.streamingInfo.rent && movies.streamingInfo.rent.length > 0 ?
                                <StreamingInfo rent={movies.streamingInfo.rent} buy={movies.streamingInfo.buy} link={movies.streamingInfo.link} />:
                                <h3 className='w-1/4 dark:text-white mt-5'>No Streaming Info For This Title</h3>
                            }
                            <Overview overview={movies.overview} />
    
                        </div>
                        {
                            movies.cast && movies.cast.length > 0 &&
                            <Cast cast={movies.cast} />
                        }
                    </>
    
                }
            </OneFilmLayout>
        )
    }
    else{
        return (
            <OneFilmLayout>
                <Loading/>
            </OneFilmLayout>
        )
    }
}
