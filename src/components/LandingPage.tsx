import { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { MovieContext } from "../context/MovieProvider"
import { TvShowContext } from "../context/TvShowProvider"
import getPopularMovies from "../lib/GetPopularMovies"
import getPopularTvSeries from '../lib/GetPopularTvSeries'
import getInTheaters from "../lib/InTheaters"
import getTop100AllTime from "../lib/Top100AllTime"
import { Movie } from "../types/MovieType"
import { TvShowType } from "../types/TvShowType"
import HomepageFilm from "./HomepageFilm"
import HomepageFilmContainer from "./HomepageFilmContainer"
import Loading from "./Loading"


export default function LandingPage() {
    const { movies, setMovies } = useContext(MovieContext);
    const { tvShows, setTvShows } = useContext(TvShowContext);
    const location = useLocation()
    useEffect(() => {
        if(location.pathname === '/'){
            async function getMovies() {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }
            getMovies()
    }
    else if (location.pathname === '/tvshows') {
        async function getTvShows() {
            const popularTvSeries = await getPopularTvSeries()
            setTvShows(popularTvSeries.results)
        }
        getTvShows()
    }
    else if(location.pathname === '/theaters'){
        async function getMoviesInTheaters() {
            const moviesInTheaters = await getInTheaters()
            setMovies(moviesInTheaters)
        }
        getMoviesInTheaters()
    }
    else if(location.pathname === '/topAllTime'){
        async function getTop100AllTimeMovies() {
            const top100AllTime = await getTop100AllTime()
            setMovies(top100AllTime)
        }
        getTop100AllTimeMovies()
    }
        
    }, [location.pathname])


    if(location.pathname === '/tvshows' && tvShows && Array.isArray(tvShows)){
        const tvShowsComponents:JSX.Element[] = tvShows.map((tvshow:TvShowType) => {
            return (
                <HomepageFilm 
                    key={tvshow.id} 
                    id={tvshow.id} 
                    title={tvshow.name} 
                    poster_path={tvshow.poster_path} 
                    mediaType='tvshow'
                />
            )
        })
        return (
            <HomepageFilmContainer>
                {tvShowsComponents}
            </HomepageFilmContainer>
        )
    }
    else if (location.pathname === '/' && movies && Array.isArray(movies)){
        const moveisComponents:JSX.Element[] = movies.map((movie: Movie) => {
            return (
                <HomepageFilm 
                    key={movie.id} 
                    id={movie.id} 
                    title={movie.title} 
                    poster_path={movie.poster_path} 
                    mediaType={movie.media_type? movie.media_type: 'movie'} 
                />
            )
        }
        )
        return(
            <HomepageFilmContainer>
                {moveisComponents}
            </HomepageFilmContainer>
        )
    }
    else if(location.pathname === '/search' && movies && Array.isArray(movies)){
        const moveisComponents:JSX.Element[] = movies.map((movie: Movie) => {
            return (
                <HomepageFilm 
                    key={movie.id} 
                    id={movie.id} 
                    title={movie.title} 
                    poster_path={movie.poster_path} 
                    mediaType={movie.media_type? movie.media_type: 'movie'} 
                />
            )
        })
        return (
            <HomepageFilmContainer>
                {moveisComponents}
            </HomepageFilmContainer>
        )
    }
    else if(location.pathname === '/theaters' && movies && Array.isArray(movies)){
        const moveisComponents:JSX.Element[] = movies.map((movie: Movie) => {
            return (
                <HomepageFilm 
                    key={movie.id} 
                    id={movie.id} 
                    title={movie.title} 
                    poster_path={movie.poster_path} 
                    mediaType={movie.media_type? movie.media_type: 'movie'} 
                />
            )
        })
        return (
            <HomepageFilmContainer>
                {moveisComponents}
            </HomepageFilmContainer>
        )
    }
    else if(location.pathname === '/topAllTime' && movies && Array.isArray(movies)){
        const moveisComponents:JSX.Element[] = movies.map((movie: Movie) => {
            return (
                <HomepageFilm 
                    key={movie.id} 
                    id={movie.id} 
                    title={movie.title} 
                    poster_path={movie.poster_path} 
                    mediaType={movie.media_type? movie.media_type: 'movie'} 
                />
            )
        })
        return (
            <HomepageFilmContainer>
                {moveisComponents}
            </HomepageFilmContainer>
        )
    }
    else {
        return (
            <HomepageFilmContainer>
                <Loading/>
            </HomepageFilmContainer>
        )
    }
}
